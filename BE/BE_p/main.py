from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from utils.datamodel import TranslateInput
from core.module.translate import Translate
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
        translate_module = Translate(config=inputs.params)
        result = translate_module.run(inputs.params['input_text'], inputs.params['language'], inputs.params['temperature'])
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e
