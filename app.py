from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    # 这里可以集成实际的智能体逻辑，例如调用 GPT 模型
    response_message = f"你说的是: {user_message}"
    return jsonify({'message': response_message})

if __name__ == '__main__':
    app.run(debug=True)