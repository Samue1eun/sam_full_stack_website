from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import pictures
from supabase import create_client, Client
from dotenv import load_dotenv
import os
from pathlib import Path

app = FastAPI()

# Routers
app.include_router(pictures.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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