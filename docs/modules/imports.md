# import 语句速查

> 这是整个 Python 部分的基础。**题目不提供代码框架，你必须能默写出这些 import 语句。**

## 数据预处理（必背）

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
```

## 建模（必背）

```python
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestRegressor
import xgboost as xgb
from sklearn.metrics import mean_squared_error, r2_score
from imblearn.over_sampling import SMOTE
import joblib
```

## 图像识别（必背）

```python
import onnxruntime as ort
from PIL import Image
import cv2
import numpy as np
from scipy.special import softmax
import os
```

## 通用工具（建议背）

```python
import os
import json
```

## 记忆方法

把 import 拆成三组、按"数据 → 模型 → 图像"的顺序背。每天写一遍，七天后就能在白纸上默写。

::: warning 这一页是命脉
不会写 import 等于不会做题。考前一周务必每天默写一遍。
:::
