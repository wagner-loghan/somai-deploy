from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(title="SOMAI API")

# CORS - Substitua pelo domínio do Vercel depois
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Em produção: ["https://somai.vercel.app"]
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"status": "ok", "service": "somai-backend"}

@app.get("/")
def root():
    return {"message": "SOMAI API v1.0 - Online"}
