import axios from 'axios';

export const getAISuggestions = async (prompt) => {
  const response = await axios.post('https://api.openai.com/v1/completions', {
    model: 'text-davinci-003',
    prompt: `Suggest subtopics for: ${prompt}`,
    max_tokens: 60
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    }
  });

  return response.data.choices[0].text.trim();
};
