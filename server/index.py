from flask import Flask, request, jsonify
import os
import seaborn as sns
# import numpy as np
import pandas as pd
import matplotlib as mpl
import matplotlib.pyplot as plt, mpld3

app = Flask(__name__)

@app.route('/api/dataviz', methods=['GET'])
def data_viz():
    fig, ax = plt.subplots()
    ax.plot([3,1,4,1,5], 'ks-', mec='w', mew=5, ms=20)
    payload = mpld3.fig_to_dict(fig)
    return jsonify(payload)
