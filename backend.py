from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/hello')
def get_hello_message():
    return jsonify({'message': 'Hello from the backend!'})

if __name__ == '__main__':
    app.run(debug=True)
