# API 速查表

> 本表是项目最有价值的资产之一——基于站长考试经验整理。完整版含图解和示例。

## 通用考试策略

::: tip 必记
**题目不提供代码框架，只需背诵 import 语句和核心 API 调用。**
:::

详见 [import 速查](./imports)。

## 数据预处理（对应 1.1.x、2.1.x，约 40 分）

| 场景 | 核心 API |
|------|---------|
| 数据读取 | `pd.read_csv()`、`pd.read_excel()` |
| 数据理解 | `print(data.head())`、`data.shape`、`len(data)`、`data.info()` |
| 数据生成与转换 | `np.where()`、`pd.cut()`、`pd.get_dummies()`、`df['列名'].apply()` |
| 数据计算与分组 | `value_counts()`、`data.groupby().agg()` |
| 数据检查与清洗 | `.isnull().sum()`、`.duplicated().sum()`、`fillna()`、`data.drop()`、`dropna()`、`data.rename()` |
| 条件筛选 | `isin()`、`.between()` |
| 类型转化 | `astype()`、`pd.to_numeric()` |
| 标准化与异常值处理 | `.mean()`、`.std()`、`.quantile()`、`scaler.fit_transform()` |
| 数据集分割与保存 | `train_test_split()`、`pd.concat()`、`data.to_csv()` |
| 绘图 | `data.plot(kind='bar')`、`data.plot.pie()`、`plt.scatter()` |

## 建模（对应 2.2.x，20 分）

| 场景 | 核心 API |
|------|---------|
| 模型定义与训练 | `LogisticRegression`、`RandomForestRegressor`、`xgb.XGBRegressor`、`model.fit()`、`.dump()` |
| 预测与样本平衡 | `model.predict()`、`smote.fit_resample()` |
| 模型评估 | `model.score()`、`mean_squared_error()`、`r2_score()` |

## 图像识别（对应 3.2.x，20 分）

| 场景 | 核心 API |
|------|---------|
| 模型加载 | `ort.InferenceSession()` |
| 图像处理 | `Image.open().convert()`、`cv2.imread()`、`image.resize()`、`np.asarray()`、`np.expand_dims()` |
| 模型应用与输出 | `session.get_inputs()`、`session.run()`、`scipy.special.softmax()`、`np.argsort()`、`np.argmax()` |
| 结果处理与文件操作 | `list(emotion_table.keys())`、`open('labels.txt', 'r')`、`accuracy[0, predicted_idx] * 100`、`name.strip()`、`makedirs()` |
