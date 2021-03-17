@echo off

setlocal

:: BatchGotAdmin
:-------------------------------------
REM  --> Check for permissions
    IF "%PROCESSOR_ARCHITECTURE%" EQU "amd64" (
>nul 2>&1 "%SYSTEMROOT%\SysWOW64\cacls.exe" "%SYSTEMROOT%\SysWOW64\config\system"
) ELSE (
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
)

REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
    echo Requesting administrative privileges...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    set params= %*
    echo UAC.ShellExecute "cmd.exe", "/k ""%~s0"" %params:"=""%", "", "runas", 1 >> "%temp%\getadmin.vbs"

    "%temp%\getadmin.vbs"
    del "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    pushd "%CD%"
    CD /D "%~dp0"

:--------------------------------------

WHERE node
WHERE nvm

IF %ERRORLEVEL% NEQ 0 (
    ECHO NVM wasn't found
    goto :task
) ELSE (
    ECHO NVM found !!

    IF EXIST ".nvmrc" (
        ECHO NVMRC found !!

        for /f "delims=" %%x in (.nvmrc) do (
            set Version=%%x
            goto :next
        )
    ) ELSE (
        ECHO NVMRC wasn't found
        goto :task
    )
)

:next

ECHO Required NodeJs v%Version%

nvm use %Version%

timeout /t 2 /nobreak

:task

npm run develop

pause

endlocal
