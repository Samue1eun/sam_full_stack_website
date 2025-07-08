from fastapi import FastAPI
from .routers import pictures
from supabase import create_client, Client
from dotenv import load_dotenv
import os
from pathlib import Path

# Get the path to the .env file more reliably
env_path = Path(__file__).parent.parent.parent / ".env"
load_dotenv(env_path)

app = FastAPI()
app.include_router(pictures.router)

# Supabase configuration
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_ANON_KEY")
BUCKET_NAME = os.getenv("SUPABASE_BUCKET_NAME", "bio-pics")

# Add error checking
if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("SUPABASE_URL and SUPABASE_ANON_KEY must be set in environment variables")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.get("/")
def read_root():
    return {"Hello": "World"}

# @app.get("/pictures")
# def get_pictures():
#     try:
#         # List files in your picture bucket using the bucket name from .env
#         result = supabase.storage.from_(BUCKET_NAME).list()
#         return {"files": result}
#     except Exception as e:
#         return {"error": str(e)}