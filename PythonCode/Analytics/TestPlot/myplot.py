

import matplotlib.pyplot as plt

class MyPlot:
  def __init__(self):
    self.fig = plt.figure(figsize=(20, 16))
    self.pltpos = 0
    

  def plot(self,points):
    self.pltpos += 1
    self.ax = self.fig.add_subplot(3,2,self.pltpos)
    self.ax.plot(points)
    self.fig.show()

  def crossplot(self,xvars,yvars):
    self.pltpos += 1
    self.ax = self.fig.add_subplot(3,2,self.pltpos)
    self.ax.plot(xvars,yvars)
    self.fig.show()

  def histogram(self,points,bins):
    self.pltpos += 1
    self.ax = self.fig.add_subplot(3,2,self.pltpos)
    self.ax.hist(points,bins)
    #print(points)
    self.fig.show()