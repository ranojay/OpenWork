attrib *.* -H
attrib *.suo -H
attrib *.opensdf -H

FOR /f %%a IN ( 'dir /s /b *.*ipynb_checkpoints' ) Do del /S /Q  %%a
FOR /f %%a IN ( 'dir /s /b *.*ipynb_checkpoints' ) Do rd /S /Q %%a
FOR /f %%a IN ( 'dir /s /b *__pycache__*' ) Do rd /S /Q %%a

pause
