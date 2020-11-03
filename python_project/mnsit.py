import numpy as np
import keras
from keras.datasets import mnist
from keras.utils.np_utils import to_categorical
from keras.models import Sequential
from keras.layers import Dense, Dropout, Flatten
from keras.optimizers import Adam
from keras.layers.convolutional import MaxPooling2D, Conv2D


def mnist_convnet():
    model = Sequential()
    # Conv2D(filter, kernalsize, )
    model.add(Conv2D(32, (5, 5), input_shape=(28, 28, 1), activation='relu'))
    model.add(MaxPooling2D((2, 2)))

    # Conv2D(filter, kernalsize, )
    model.add(Conv2D(16, (3, 3), activation='relu'))
    model.add(MaxPooling2D((2, 2)))

    model.add(Flatten())
    model.add(Dense(100, activation='relu'))

    model.add(Dropout(0.5))

    model.add(Dense(10, activation='softmax'))

    model.compile(Adam(lr=0.01), loss='categorical_crossentropy',
                  metrics=['accuracy'])

    return model


if __name__ == "__main__":
    (X_train, Y_train), (X_test, Y_test) = mnist.load_data()

    print(X_train.shape, X_test.shape)
    print(Y_train.shape, Y_test.shape)

    # add color channel
    X_train = np.expand_dims(X_train, axis=3)
    X_test = np.expand_dims(X_test, axis=3)

    print(X_train.shape, X_test.shape)

    # one-hot-encoding
    Y_train = to_categorical(Y_train, 10)
    Y_test = to_categorical(Y_test, 10)

    # normalize
    X_train, X_test = X_train/255, X_test/255

    model = mnist_convnet()
    # print(model.summary())

    history = model.fit(X_train, Y_train, epochs=8,
                        validation_split=0.2, batch_size=256, verbose=2, shuffle=True)

    score = model.evaluate(X_test, Y_test, verbose=0)

    model.save('models/msint_CNN_model.h5')
