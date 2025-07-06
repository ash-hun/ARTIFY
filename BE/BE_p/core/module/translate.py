from openai import OpenAI
from core.prompt.template import TRANSLATE_SYSTEM_PROMPT, TRANSLATE_PROMPT

class Translate:
    ''' Translation Class 입니다. '''
    def __init__(self, params: dict):
        self.request_params = params
        self.client = OpenAI(api_key=self.request_params['OPENAI_API_KEY'])
    
    def _get_system_prompt(self, language: str) -> str:
        return TRANSLATE_SYSTEM_PROMPT.format(language=language)
    
    def _get_prompt(self, text: str, language: str) -> str:
        return TRANSLATE_PROMPT.format(text=text, language=language)
    
    def run(self, text: str, language: str) -> str:
        ''' Translation API 입니다. 
        
        Args:
            text (str): 번역할 텍스트
            language (str): 번역할 언어
            
        Returns:
            str: 번역된 텍스트
            
        Note:
            - temperature: 0.0 ~ 2.0 사이의 값 (기본값: 1.0)
            - top_p: 0.0 ~ 1.0 사이의 값 (기본값: 1.0)
            - presence_penalty: -2.0 ~ 2.0 사이의 값 (기본값: 0.0)
            - frequency_penalty: -2.0 ~ 2.0 사이의 값 (기본값: 0.0)
        '''
        try:
            response = self.client.chat.completions.create(
                model='gpt-4o-mini',
                messages=[
                    {"role": "system", "content": self._get_system_prompt(language)},
                    {"role": "user", "content": self._get_prompt(text, language)}
                ],
                temperature=self.request_params['temperature'],
                top_p=self.request_params['top_p'],
                frequency_penalty=self.request_params['frequency_penalty'],
                presence_penalty=self.request_params['presence_penalty']
            )
            return response.choices[0].message.content
        except Exception as e:
            print(e)
            raise e