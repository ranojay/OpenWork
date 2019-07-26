
import matplotlib as mpl

import matplotlib.pyplot as plt

class MyPlot:
  def __init__(self):
    self.plot = plt
    self.sp = 121
    

  def plot(self,points):
    self.plot.plot(points)
    print(points)
    self.plot.show()

  def crossplot(self,xvars,yvars):
    #self.plot.subplot(self.sp)
    self.sp += 1
    self.plot.plot(xvars,yvars)
    self.plot.show()

  def histogram(self,points,bins):
    self.plot.hist(points,bins)
    self.plot.show()