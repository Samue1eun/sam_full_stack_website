from fastapi import APIRouter
from supabase import create_client, Client
from dotenv import load_dotenv
import os
from pathlib import Path

router = APIRouter(prefix="/pictures", tags=["pictures"])

@router.get("/")
def get_pictures():
    try:
        result = supabase.storage.from_(BUCKET_NAME).list()
        return {"files": result}
    except Exception as e:
        return {"error": str(e)}
    

# @router.get("/{picture_id}")
# def get_picture(picture_id: str):
#     return {"message": f"This endpoint will return picture with ID: {picture_id}."}