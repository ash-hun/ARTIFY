from pydantic import BaseModel

class TranslateInput(BaseModel):
    info: dict = {
        'language': {
            'from': 'KOREAN',
            'to': 'ENGLISH'
        },
        'params': {
            'OPENAI_API_KEY': '__personal_openai_api_key__',
            'temperature': 0.0,
            'top_p': 1.0,
            'frequency_penalty': 0.5,
            'presence_penalty': 0.5
        },
        'template': 'Please translation followings: \n{passage} \n yours:',
        'template_variable': {
            'passage' : '아 디자인은 왜 씨발 이렇게 어려운거야'
        }
    }
