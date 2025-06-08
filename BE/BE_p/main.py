import uuid
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

@app.post("/translate", tags=['Core'])
def translate(inputs: TranslateInput):
    ''' Translation API 입니다.'''
    config = inputs.info
    try:
        translate_module = Translate(params=config['params'])
        result = translate_module.run(
            text=config['user_instruction'], 
            language=config['language']['to']
        )

        response = {
            'uuid': str(uuid.uuid4()),
            'content': {
                'before': config['user_instruction'],
                'after': result
            }
        }
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) from e
