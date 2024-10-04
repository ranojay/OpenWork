FOR /f %%a IN ( 'dir /s /b *.*zip' ) Do tar -xf  %%a
pause