import myplot
import random
import numpy as np

Fs = 150.0;  # sampling rate
Ts = 1.0/Fs; # sampling interval
t = np.arange(0,1,Ts) # time vector

freq1 = 5;   # frequency of the signal
freq2 = 10;   # frequency of the signal
freq3 = 20

wave1 = np.sin(2*np.pi*freq1*t)
wave2 = np.sin(2*np.pi*freq2*t)
wave3 = np.sin(2*np.pi*freq3*t)
signal = wave1 + wave2 + wave3

mplot1 = myplot.MyPlot()
mplot1.crossplot(t,signal)

n = len(signal) # length of the signal
k = np.arange(n)
T = n/Fs
frq = k/T # two sides frequency range
frq = frq[range(n//2)] # one side frequency range

fftsignal = np.fft.fft(signal)/n # fft computing and normalization
fftsignal = fftsignal[range(n//2)]

mplot2 = myplot.MyPlot()
mplot2.crossplot(frq,abs(fftsignal))
