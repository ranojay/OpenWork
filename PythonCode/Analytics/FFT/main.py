import myplot
import random
import numpy as np
import myplot

filename = 'C:\\Users\\Ranojay.Sen\\AppData\\Roaming\\Schlumberger\\Techlog\\PythonScripts\\panel.txt' 
length = 672
receivers = 8 

Fs = 100.0;  # sampling rate
Ts = 1.0/Fs; # sampling interval

panel = np.zeros((receivers,length))
time = np.zeros(length)

infile = open(filename)

i = 0
for line in infile:
        L = line.split()
        time[i] = float(L[0])
        for j in range(receivers):
                panel[j,i] = float(L[j+1])
        i += 1                
infile.close()

#time = np.arange(0,1,Ts) # time vector

freq1 = 5   # frequency of the signal
freq2 = 10  # frequency of the signal
freq3 = 20  # frequency of the signal

amp1 = 20
amp2 = 10
amp3 = 5

wave1 = amp1*np.sin(2*np.pi*freq1*time)
wave2 = amp2*np.sin(2*np.pi*freq2*time)
wave3 = amp3*np.sin(2*np.pi*freq3*time)
#signal = wave1 + wave2 + wave3

signal = panel[6]

mplot1 = myplot.MyPlot()
mplot1.crossplot(time,signal)
#print(time)

n = len(signal) # length of the signal
k = np.arange(n)
T = n/Fs
frq = k/T # two sides frequency range
frq = frq[range(n//2)] # one side frequency range

fftsignal = np.fft.fft(signal)/n # fft computing and normalization
fftsignal = fftsignal[range(n//2)]

mplot2 = myplot.MyPlot()
mplot2.crossplot(frq,abs(fftsignal))
