import pandas as pd
import matplotlib
matplotlib.use("agg")
import matplotlib.pyplot as plt, mpld3
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route('/api/dataviz', methods=['GET'])
def data_viz():
    fig, ax = plt.subplots()
    ax.plot([3,1,4,1,5], 'ks-', mec='w', mew=5, ms=20)
    payload = mpld3.fig_to_dict(fig)
    jsonData = jsonify(payload)
    return jsonData