from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from core.module.translate import Translate
from utils.datamodel import TranslateInput

from config import get_settings
settings = get_settings()

# ================================================
#                   Swagger 설정
# ================================================
SWAGGER_HEADERS = {
    "title": "ARTIFY",
    "version": "0.1.0",
    "description": "## ARTIFY Backend Proxy API Docs",
}

app = FastAPI(
    swagger_ui_parameters={
        "deepLinking": True,
        "displayRequestDuration": True,
        "docExpansion": "none",
        "syntaxHighlight.theme": "tomorrow-night",
    },
    **SWAGGER_HEADERS
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# ================================================
#                   API 설정
# ================================================

@app.get("/translate", tags=['Core'])
def translate(inputs: TranslateInput):
    ''' Translation API 입니다.'''
    try:
        translate_module = Translate()
        result = translate_module.run(inputs.params['text'], inputs.params['language'])
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e
