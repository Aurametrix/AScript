import jax.numpy as np
from jax import grad, jit, vmap
from functools import partial

def predict(params, inputs):
  for W, b in params:
    outputs = np.dot(inputs, W) + b
    inputs = np.tanh(outputs)
  return outputs

def logprob_fun(params, inputs, targets):
  preds = predict(params, inputs)
  return np.sum((preds - targets)**2)

grad_fun = jit(grad(logprob_fun))  # compiled gradient evaluation function
perex_grads = jit(lambda params, inputs, targets:  # fast per-example gradients
                  vmap(partial(grad_fun, params), inputs, targets))
