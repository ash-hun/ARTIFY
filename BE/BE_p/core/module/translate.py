from openai import OpenAI
from typing_extensions import Literal
from core.prompt.template import TRANSLATE_SYSTEM_PROMPT, TRANSLATE_PROMPT

class Translate:
    ''' Translation Class 입니다. '''
    def __init__(self, config: dict):
        self.config = config
        self.client = OpenAI(api_key=config['OPENAI_API_KEY'])
    
    @property
    def _get_system_prompt(self) -> str:
        return TRANSLATE_SYSTEM_PROMPT
    
    @property
    def _get_prompt(self, text: str, language: Literal['en', 'ko']) -> str:
        return TRANSLATE_PROMPT.format(text=text, language=language)
    
    def run(self, text: str, language: Literal['en', 'ko'], temperature: float = 0.0) -> str:
        ''' Translation API 입니다. '''
        try:
            response = self.client.chat.completions.create(
                model=self.config['MODEL'],
                messages=[
                {"role": "system", "content": self._get_system_prompt},
                {"role": "user", "content": self._get_prompt(text, language)}
                ],
                temperature=temperature
            )
            return response.choices[0].message.content
        except Exception as e:
            raise e
