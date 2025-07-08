from fastapi import APIRouter
from supabase import create_client, Client
from dotenv import load_dotenv
import os
from pathlib import Path

env_path = Path(__file__).parent.parent.parent.parent / ".env"
load_dotenv(env_path)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_ANON_KEY")
BUCKET_NAME = os.getenv("SUPABASE_BUCKET_NAME", "bio-pics")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("SUPABASE_URL and SUPABASE_ANON_KEY must be set in environment variables")

router = APIRouter(prefix="/pictures", tags=["pictures"])

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@router.get("/")
def get_pictures():
    try:
        result = supabase.storage.from_(BUCKET_NAME).list()
        return {"files": result}
    except Exception as e:
        return {"error": str(e)}
    

@router.get("/{picture_id}")
def get_picture(picture_id: str):
    try:
        # Get the public URL for the specific picture
        url = supabase.storage.from_(BUCKET_NAME).get_public_url(picture_id)
        return {
            "picture_id": picture_id,
            "url": url
        }
    except Exception as e:
        return {"error": str(e), "picture_id": picture_id}
    