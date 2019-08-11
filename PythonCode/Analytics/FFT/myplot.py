

import matplotlib.pyplot as plt

class MyPlot:
  def __init__(self):
    self.fig = plt.figure(figsize=(20, 16))
    self.pltpos = 0
    

  def plot(self,points,label=""):
    self.pltpos += 1
    self.ax = self.fig.add_subplot(3,2,self.pltpos)
    self.ax.plot(points)
    plt.xlabel(label)
    self.fig.show()

  def crossplot(self,xvars,yvars,label):
    self.pltpos += 1
    self.ax = self.fig.add_subplot(3,2,self.pltpos)
    self.ax.plot(xvars,yvars)
    plt.xlabel(label)
    self.fig.show()

  def histogram(self,points,bins,label):
    self.pltpos += 1
    self.ax = self.fig.add_subplot(3,2,self.pltpos)
    self.ax.hist(points,bins)
    plt.xlabel(label)
    #print(points)
    self.fig.show()