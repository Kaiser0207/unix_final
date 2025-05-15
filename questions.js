// questions.js - 題庫數據文件
// 從PDF轉換而來的題庫
const questions = [
    {
        id: 1,
        q: "Which of the following Linux commands can display one page of content at a time?",
        options: {
            A: "pause",
            B: "cat",
            C: "more",
            D: "grep"
        },
        answer: "C",
        explanation: "more 命令用於顯示文本檔案的內容，但與 cat 不同的是，它每次只顯示一頁，可以按空格鍵繼續顯示下一頁內容。"
    },
    {
        id: 2,
        q: "How to change the permission setting of a file?",
        options: {
            A: "attrib",
            B: "chmod",
            C: "change",
            D: "file"
        },
        answer: "B",
        explanation: "chmod 命令用於更改文件或目錄的訪問權限。chmod是change mode的縮寫，用來改變文件的權限。"
    },
    {
        id: 3,
        q: "Which of the following parameters can delete a user and delete the user's home directory at the same time?",
        options: {
            A: "rmuser -r",
            B: "deluser -r",
            C: "userdel -r",
            D: "usermgr -r"
        },
        answer: "C",
        explanation: "userdel -r 命令可以同時刪除用戶和該用戶的家目錄。-r 參數表示刪除用戶的同時，也一起刪除與該用戶相關的所有文件。"
    },
    {
        id: 4,
        q: "Which the following command can f1.txt copy is f2.txt?",
        options: {
            A: "cp f1.txt | f2.txt",
            B: "cat f1.txt | f2.txt",
            C: "cat f1.txt > f2.txt",
            D: "copy f1.txt | f2.txt"
        },
        answer: "C",
        explanation: "cat f1.txt > f2.txt 命令會讀取 f1.txt 的內容，然後通過重定向操作符 > 將內容寫入到 f2.txt 文件中，實現文件複製。"
    },
    {
        id: 5,
        q: "The command to display the last few lines of a file is:",
        options: {
            A: "tac",
            B: "tail",
            C: "rear",
            D: "last"
        },
        answer: "B",
        explanation: "tail 命令用於顯示文件的末尾部分，默認顯示最後 10 行。可以使用 -n 參數指定要顯示的行數。"
    },
    {
        id: 6,
        q: "How to quickly switch to the home directory of user John ?",
        options: {
            A: "cd @John",
            B: "cd #John",
            C: "cd &John",
            D: "cd ~John"
        },
        answer: "D",
        explanation: "cd ~John 命令可以直接切換到用戶 John 的家目錄。在 Linux 中，波浪號(~)後跟用戶名表示該用戶的家目錄。"
    },
    {
        id: 7,
        q: "How to find and display all the lines beginning with '*' in the file ?",
        options: {
            A: "find \\* file",
            B: "wc -l * < file",
            C: "grep -n * file",
            D: "grep '^\\*' file"
        },
        answer: "D",
        explanation: "grep '^\\*' file 命令使用正則表達式查找文件中所有以星號(*)開頭的行。'^'符號代表行的開始，而'\\*'則表示對星號字符進行轉義。"
    },
    {
        id: 8,
        q: "What parameters are used to display the processes of all users in the ps command?",
        options: {
            A: "a",
            B: "b",
            C: "u",
            D: "x"
        },
        answer: "A",
        explanation: "ps a 命令會顯示所有用戶的進程。a 參數表示列出所有用戶的進程，而不僅僅是當前用戶的進程。"
    },
    {
        id: 9,
        q: "How to delete a non-empty subdirectory tmp ?",
        options: {
            A: "del tmp/*",
            B: "rm -rf tmp",
            C: "rm -Ra tmp/*",
            D: "rm -rf tmp/*"
        },
        answer: "B",
        explanation: "rm -rf tmp 命令可以刪除非空目錄 tmp。-r 選項表示遞歸刪除，-f 選項表示強制刪除且不顯示提示信息。"
    },
    {
        id: 10,
        q: "Which file should be placed in the variable settings of all users?",
        options: {
            A: "/etc/bashrc",
            B: "/etc/profile",
            C: "~/.bash_profile",
            D: "/etc/skel/.Bashrc"
        },
        answer: "B",
        explanation: "/etc/profile 是系統級的初始化文件，適用於所有用戶。當用戶登錄時，該文件被執行，用於設置所有用戶共用的環境變量。"
    },
    {
        id: 11,
        q: "What is the command to exit without saving in vi ?",
        options: {
            A: ":q",
            B: ":w",
            C: ":wq",
            D: ":q!"
        },
        answer: "D",
        explanation: ":q! 是在 vi/vim 編輯器中不保存修改強制退出的命令。:q 是在沒有修改文件時退出，:w 是保存文件，:wq 是保存並退出。"
    },
    {
        id: 12,
        q: "What command is used to detect the basic network connection?",
        options: {
            A: "ping",
            B: "route",
            C: "netstat",
            D: "ifconfig"
        },
        answer: "A",
        explanation: "ping 命令用於測試網絡連接和主機可達性，它通過發送 ICMP 回顯請求包並等待目標主機的回應來檢測網絡連接。"
    },
    {
        id: 13,
        q: "Which of the following commands can compress some files:",
        options: {
            A: "tar -dzvf filename.tgz *",
            B: "tar -tzvf filename.tgz *",
            C: "tar -czvf filename.tgz *",
            D: "tar -xzvf filename.tgz *"
        },
        answer: "C",
        explanation: "tar -czvf filename.tgz * 命令可以壓縮文件。-c 表示創建新歸檔，-z 表示使用 gzip 壓縮，-v 表示詳細模式(顯示處理的文件)，-f 表示指定歸檔文件名。"
    },
    {
        id: 14,
        q: "What command is used to decompress the tar file?",
        options: {
            A: "tar -czvf filename.tgz",
            B: "tar -xzvf filename.tgz",
            C: "tar -tzvf filename.tgz",
            D: "tar -dzvf filename.tgz"
        },
        answer: "B",
        explanation: "tar -xzvf filename.tgz 命令用於解壓縮 tar 文件。-x 表示提取歸檔，-z 表示使用 gzip 解壓縮，-v 表示詳細模式，-f 表示指定歸檔文件名。"
    },
    {
        id: 15,
        q: "Linux file permissions have a total length of 10 bits and are divided into four sections The content of the third section is",
        options: {
            A: "file type",
            B: "file owner's permissions",
            C: "file owner's group permissions",
            D: "permissions of other users"
        },
        answer: "C",
        explanation: "Linux 文件權限共 10 位，分為四個部分：第一位是文件類型，第二部分是文件所有者權限(2-4位)，第三部分是文件所有者組權限(5-7位)，第四部分是其他用戶權限(8-10位)。"
    },
    {
        id: 16,
        q: "delete file command is",
        options: {
            A: "mkdir",
            B: "rmdir",
            C: "mv",
            D: "rm"
        },
        answer: "D",
        explanation: "rm 命令用於刪除文件。mkdir 用於創建目錄，rmdir 用於刪除空目錄，mv 用於移動或重命名文件。"
    },
    {
        id: 17,
        q: "The command to change the owner of a file is :",
        options: {
            A: "chmod",
            B: "touch",
            C: "chown",
            D: "cat"
        },
        answer: "C",
        explanation: "chown 命令用於更改文件所有者。chmod 用於更改文件權限，touch 用於創建空文件或更新文件時間戳，cat 用於顯示文件內容。"
    },
    {
        id: 18,
        q: "The command to find a string matching the set conditions in a given file is:",
        options: {
            A: "grep",
            B: "gzip",
            C: "find",
            D: "sort"
        },
        answer: "A",
        explanation: "grep 命令用於在文件中搜索匹配指定模式的文本行。gzip 用於壓縮文件，find 用於查找文件，sort 用於排序文件內容。"
    },
    {
        id: 19,
        q: "The commands that can be used to create a new file are",
        options: {
            A: "chmod",
            B: "more",
            C: "cp",
            D: "touch"
        },
        answer: "D",
        explanation: "touch 命令可用於創建新的空文件。chmod 用於更改文件權限，more 用於分頁顯示文件內容，cp 用於複製文件。"
    },
    {
        id: 20,
        q: "In the following commands, which command can not display the contents of a text file:",
        options: {
            A: "more",
            B: "less",
            C: "tail",
            D: "join"
        },
        answer: "D",
        explanation: "join 命令不用於顯示文件內容，而是用於根據共享字段合併兩個文件的行。more、less 和 tail 都可以用於顯示文件內容。"
    },
    {
        id: 21,
        q: "Which directory stores the source code of Linux .",
        options: {
            A: "/etc",
            B: "/usr/src",
            C: "/usr",
            D: "/home"
        },
        answer: "B",
        explanation: "/usr/src 目錄通常用於存放 Linux 內核和其他系統軟件的源代碼。/etc 存放配置文件，/usr 存放用戶程序，/home 存放用戶家目錄。"
    },
    {
        id: 22,
        q: "The description of the top command is correct",
        options: {
            A: "is used to dynamically display the dynamic information of the Linux process in real time.",
            B: "view thread details",
            C: "view process name",
            D: "shows the memory situation"
        },
        answer: "A",
        explanation: "top 命令用於實時動態顯示 Linux 進程的信息，包括 CPU 使用率、內存使用、運行時間等，可以全面監控系統的運行狀況。"
    },
    {
        id: 23,
        q: "There are two least mount points for the Linux system",
        options: {
            A: "is the root mount point home, and the other is swap",
            B: "a is the root mount point /, the other is a swap",
            C: "one is the root mount point boot , the other is swap",
            D: "one is the root mount point user , the other is boot"
        },
        answer: "B",
        explanation: "Linux 最基本的兩個掛載點是根掛載點(/)和交換分區(swap)。根掛載點是文件系統的起始點，而交換分區用於虛擬內存管理。"
    },
    {
        id: 24,
        q: "shows the tree structure of files and directories starting from the root directory",
        options: {
            A: "tree",
            B: "ls",
            C: "pwd",
            D: "ln"
        },
        answer: "A",
        explanation: "tree 命令以樹狀結構顯示目錄和文件。ls 僅列出目錄內容，pwd 顯示當前工作目錄，ln 創建文件鏈接。"
    },
    {
        id: 25,
        q: "Linux view and open ports to the outside world",
        options: {
            A: "vi /etc/profile",
            B: "cat /etc/sysconfig/net-work",
            C: "more /etc/sysconfig/iptables",
            D: "ps aux"
        },
        answer: "C",
        explanation: "more /etc/sysconfig/iptables 命令可查看 iptables 防火牆配置，其中包含了開放給外部的端口信息。"
    },
    {
        id: 26,
        q: "In supercomputer computers, the most used operating system is ____.",
        options: {
            A: "NetWare",
            B: "Windows NT",
            C: "XP Windows",
            D: "Linux"
        },
        answer: "D",
        explanation: "Linux 是超級計算機中使用最廣泛的操作系統，因為它的開源性、穩定性、高性能以及可定制性，非常適合大規模並行計算環境。"
    },
    {
        id: 27,
        q: "The UNIX operating system has now become the mainstream operating system for large-scale systems. The following ____ is not a characteristic of UNIX .",
        options: {
            A: "Powerful",
            B: "Multi-user",
            C: "Single-task",
            D: "Time-sharing operating system,"
        },
        answer: "C",
        explanation: "UNIX 不是單任務操作系統，而是多任務操作系統。UNIX 的特點包括強大、多用戶、多任務以及時間共享操作系統。"
    },
    {
        id: 28,
        q: "UNIX is a ____ operating system.",
        options: {
            A: "single-user single-task",
            B: "multi-user single task",
            C: "single-user multi-task",
            D: "multi-user and multi-task"
        },
        answer: "D",
        explanation: "UNIX 是一個多用戶多任務操作系統，允許多個用戶同時登錄並運行多個程序，這是 UNIX 系統設計的基本特性。"
    },
    {
        id: 29,
        q: "The \"root\" directory of Linux is represented by ____.",
        options: {
            A: "\"/\"",
            B: "\"\\\"",
            C: "\"//\"",
            D: "\"\\\\\""
        },
        answer: "A",
        explanation: "Linux 中的根目錄用正斜杠 \"/\" 表示，這是 Linux 文件系統層次結構的頂層目錄，所有其他目錄都是從這裡分支出來的。"
    },
    {
        id: 30,
        q: "Commonly used Linux commands can be found in the ____ directory .",
        options: {
            A: "tmp",
            B: "bin",
            C: "root",
            D: "home"
        },
        answer: "B",
        explanation: "常用的 Linux 命令通常存放在 /bin 目錄中。該目錄包含系統啟動和運行所需的基本命令，對所有用戶都可用。"
    },
    {
        id: 31,
        q: "For their own files, users have the ____ right.",
        options: {
            A: "limited",
            B: "relatively",
            C: "limited part",
            D: "absolute"
        },
        answer: "D",
        explanation: "對於用戶自己的文件，用戶擁有絕對權利，可以完全控制這些文件，包括讀取、修改和刪除等操作。"
    },
    {
        id: 32,
        q: "If you do not want to log out of ordinary users and log in as the root user again, you must use the ____ command to switch to root.",
        options: {
            A: "su",
            B: "id",
            C: "the WHO",
            D: "lastb"
        },
        answer: "A",
        explanation: "su 命令用於切換用戶身份。若不想從普通用戶登出再以 root 身份登入，可使用 su 命令臨時切換到 root 用戶。"
    },
    {
        id: 33,
        q: "Shell is also a kind ____.",
        options: {
            A: "Programming language",
            B: "Browser",
            C: "The machine instruction",
            D: "None of the above"
        },
        answer: "A",
        explanation: "Shell 也是一種編程語言，它允許用戶編寫腳本程序來執行一系列的命令，支持變量、流程控制、函數等編程特性。"
    },
    {
        id: 34,
        q: "When the command entered by the shell is incomplete, you can press the ____ key to complete the automatic completion of the command.",
        options: {
            A: "The Shift",
            B: "Ctrl",
            C: "Alt",
            D: "Tab"
        },
        answer: "D",
        explanation: "在 Shell 中，當輸入的命令不完整時，可以按 Tab 鍵來自動完成命令或文件名，這是 Shell 提供的命令補全功能。"
    },
    {
        id: 35,
        q: "Symbolic link is equivalent to ____ in Windows system.",
        options: {
            A: "shortcut",
            B: "executable file",
            C: "command file",
            D: "Bbtch file"
        },
        answer: "A",
        explanation: "Linux 中的符號鏈接(symbolic link)相當於 Windows 系統中的快捷方式(shortcut)，都是指向另一個文件或目錄的參考。"
    },
    {
        id: 36,
        q: "____ command is a standard process viewing tool of the Unix system, through which you can view the detailed information of the process in the system",
        options: {
            A: "LS",
            B: "Pstree",
            C: "PS",
            D: "Top"
        },
        answer: "C",
        explanation: "ps 命令是 Unix 系統的標準進程查看工具，可以顯示系統中當前正在運行的進程的詳細信息。"
    },
    {
        id: 37,
        q: "We can use the ____ option of the tar command to create a .tar archive file:",
        options: {
            A: "a",
            B: "c",
            C: "d",
            D: "X"
        },
        answer: "B",
        explanation: "在 tar 命令中，可以使用 -c 選項來創建一個新的 .tar 歸檔文件。c 代表 create(創建)。"
    },
    {
        id: 38,
        q: "The ____ command can be used to disable or enable a network interface, set the IP address and subnet mask of the network interface, and other related options.",
        options: {
            A: "ifconfig",
            B: "netstat",
            C: "Tool-MII",
            D: "command"
        },
        answer: "A",
        explanation: "ifconfig 命令可用於啟用或禁用網絡接口，設置 IP 地址和子網掩碼，以及其他相關網絡配置選項。"
    },
    {
        id: 39,
        q: "The ____ command is used to view the path taken by the data packet from the local machine to the destination address.",
        options: {
            A: "traceroute",
            B: "MSConfig",
            C: "ifconfig",
            D: "ifconfig"
        },
        answer: "A",
        explanation: "traceroute 命令用於查看數據包從本地機器到目標地址所經過的路徑，它顯示數據包經過的每一個路由器。"
    },
    {
        id: 40,
        q: "/etc/resolv.conf file is ____ profile,",
        options: {
            A: "DNS name resolution",
            B: "Correspondence between host name and IP",
            C: "Hostname and gateway",
            D: "Parameter configuration file of the network card"
        },
        answer: "A",
        explanation: "/etc/resolv.conf 文件是 DNS 名稱解析配置文件，它指定了系統用於解析域名的 DNS 服務器地址。"
    },
    {
        id: 41,
        q: "The following ____ is not a Web server used under UNIX and LINUX platforms.",
        options: {
            A: "The W3C",
            B: "NCSA",
            C: "APACHE",
            D: "IIS"
        },
        answer: "D",
        explanation: "IIS (Internet Information Services) 不是 UNIX 和 Linux 平台上使用的 Web 服務器，而是微軟 Windows 平台的 Web 服務器。"
    },
    {
        id: 42,
        q: "The command to start Apache in the Ubuntu terminal is ____",
        options: {
            A: "sudo systemctl start apache2",
            B: "sudo service start",
            C: "sudo start httpd",
            D: "sudo start"
        },
        answer: "A",
        explanation: "在 Ubuntu 終端中啟動 Apache 的命令是 sudo systemctl start apache2，這使用 systemctl 來管理系統服務。"
    },
    {
        id: 43,
        q: "The DNS database is a collection of files that store the correspondence between domain names and ____, also known as zone files.",
        options: {
            A: "URL",
            B: "Subnet mask",
            C: "Wildcard",
            D: "IP address"
        },
        answer: "D",
        explanation: "DNS 數據庫是存儲域名和 IP 地址之間對應關係的文件集合，也稱為區域文件。DNS 的主要功能就是將域名轉換為 IP 地址。"
    },
    {
        id: 44,
        q: "The root domain at the top of the DNS domain name space can be represented by ____.",
        options: {
            A: "Dot \".\"",
            B: "Semicolon \";\"",
            C: "A dash \"-\"",
            D: "None of the above"
        },
        answer: "A",
        explanation: "DNS 域名空間頂部的根域可以用點號 \".\" 表示。在 DNS 層次結構中，根域是最頂層的域，下面是頂級域，如 .com、.org 等。"
    },
    {
        id: 45,
        q: "Use the ____ command to test DNS server operation",
        options: {
            A: "nslookup",
            B: "rpm",
            C: "restart",
            D: "nslook"
        },
        answer: "A",
        explanation: "nslookup 命令用於測試 DNS 服務器的運行情況，它可以查詢特定主機名的 IP 地址或反向查詢 IP 地址對應的主機名。"
    },
    {
        id: 46,
        q: "____ The configuration file is the core configuration file of BIND",
        options: {
            A: "Area file",
            B: "bind.conf",
            C: "named.conf",
            D: "None of the above"
        },
        answer: "C",
        explanation: "named.conf 是 BIND (Berkeley Internet Name Domain) DNS 服務器的核心配置文件，包含 DNS 服務器的主要設置和區域文件引用。"
    },
    {
        id: 47,
        q: "Which of the following special characters does NOT represent a location in the file system?",
        options: {
            A: "?",
            B: ".",
            C: "/",
            D: "~"
        },
        answer: "A",
        explanation: "? 不代表文件系統中的位置，而是一個通配符，用於匹配單個字符。. 代表當前目錄，/ 代表根目錄，~ 代表用戶的家目錄。"
    },
    {
        id: 48,
        q: "What directory permission allows a user to pass through the directory to access a file?",
        options: {
            A: "Read",
            B: "Write",
            C: "Execute",
            D: "All three"
        },
        answer: "C",
        explanation: "在目錄上的執行(Execute)權限允許用戶通過該目錄訪問其中的文件。沒有執行權限，即使有讀寫權限，也無法訪問目錄中的內容。"
    },
    {
        id: 49,
        q: "The command that can be used to change the default permission of newly created files and directories is?",
        options: {
            A: "Umask",
            B: "Chown",
            C: "Chmod",
            D: "Chperm"
        },
        answer: "A",
        explanation: "umask 命令用於設置新創建的文件和目錄的默認權限。它通過指定要從默認權限中減去的值來工作。"
    },
    {
        id: 50,
        q: "What system directory usually contains system configuration files?",
        options: {
            A: "/conf",
            B: "/etc",
            C: "/sbin",
            D: "/var"
        },
        answer: "B",
        explanation: "/etc 目錄通常包含系統配置文件。這些文件控制著系統和應用程序的行為和設置。"
    },
    {
        id: 51,
        q: "What is contained in the /dev system directory?",
        options: {
            A: "Device drivers",
            B: "Devices",
            C: "Kernel modules",
            D: "Files that represent our devices"
        },
        answer: "D",
        explanation: "/dev 目錄包含代表我們設備的文件。在 Linux 中，設備被表示為文件，通過這些文件可以與硬件設備進行交互。"
    },
    {
        id: 52,
        q: "Which of the following is a \"hidden\" file:",
        options: {
            A: "./testfile",
            B: "/testfile",
            C: "~/.testfile",
            D: "Testfile."
        },
        answer: "C",
        explanation: "~/.testfile 是一個隱藏文件，因為在 Linux 中，文件名以點(.)開頭的文件被視為隱藏文件。~ 表示用戶的家目錄。"
    },
    {
        id: 53,
        q: "What will the following command do? ls f*[34]",
        options: {
            A: "List filenames ending in a 3 or a 4",
            B: "List filenames that start with f followed by any number of 3's and 4's",
            C: "List filenames that contain a",
            D: "List filenames that start with f followed by any characters but ending with a 3 or 4"
        },
        answer: "D",
        explanation: "命令 ls f*[34] 會列出以 f 開頭並以 3 或 4 結尾的文件名。* 匹配任意數量的任意字符，[34] 匹配單個字符 3 或 4。"
    },
    {
        id: 54,
        q: "The decimal number 215 is equivalent to which of the following octal numbers?",
        options: {
            A: "315",
            B: "279",
            C: "329",
            D: "327"
        },
        answer: "D",
        explanation: "要將十進制數215轉換為八進制，需要不斷除以8並記錄餘數。215÷8=26餘7，26÷8=3餘2，3÷8=0餘3。從下到上讀取餘數，得到八進制數327。"
    },
    {
        id: 55,
        q: "The hexadecimal number 3AD is equivalent to which of the following decimal numbers?",
        options: {
            A: "947",
            B: "941",
            C: "1025",
            D: "879"
        },
        answer: "D",
        explanation: "將十六進制數3AD轉換為十進制：3×16²+10×16¹+13×16⁰=3×256+10×16+13×1=768+160+13=941。因此3AD對應的十進制數是941。"
    },
    {
        id: 56,
        q: "If a umask is currently not set what would be the permissions assigned to dir1 afer the following command: mkdir dir1",
        options: {
            A: "Rwx-x-x",
            B: "Rwxrwxrwx",
            C: "Rw-rw-rw-",
            D: "RwX------"
        },
        answer: "B",
        explanation: "如果umask未設置（即為0），創建目錄時的默認權限是777（rwxrwxrwx），這是因為目錄默認權限是777減去umask值。"
    },
    {
        id: 57,
        q: "Which vi command will exit vi without saving changes to the current document?",
        options: {
            A: ":",
            B: "wa",
            C: "ZZ",
            D: ":q!"
        },
        answer: "D",
        explanation: ":q! 命令用於退出vi編輯器而不保存對當前文檔所做的更改。這是一個強制退出命令，不會提示保存更改。"
    },
    {
        id: 58,
        q: "What command will cause all newly created directories to have the starting permissions of rwxr-x--x?",
        options: {
            A: "umask 026",
            B: "umask 620",
            C: "umask 157",
            D: "umask 751"
        },
        answer: "A",
        explanation: "umask值是從默認權限中減去的值。對於目錄，默認權限是777。要得到rwxr-x--x (751)，需要將umask設為026（因為777-026=751）。"
    },
    {
        id: 59,
        q: "What command will set the permissions of fcu to rwxrw-r--using the Octal method?",
        options: {
            A: "chmod 467 fcu",
            B: "chmod 650 fcu",
            C: "chmod 674 fcu",
            D: "chmod 764 fcu"
        },
        answer: "D",
        explanation: "權限rwxrw-r--對應的八進制表示為764。其中rwx=7（4+2+1），rw-=6（4+2+0），r--=4（4+0+0）。"
    },
    {
        id: 60,
        q: "What command will remove all permissions given to the group on fcu?",
        options: {
            A: "chmod g= fcu",
            B: "chmod f= fcu",
            C: "chmod u= fcu",
            D: "chmod w= fcu"
        },
        answer: "A",
        explanation: "chmod g= fcu 命令移除組（group）對fcu文件的所有權限。g=表示將組權限設置為空（即無權限）。"
    },
    {
        id: 61,
        q: "What command will add write permission to the user and group on fcu?",
        options: {
            A: "chmod g+w,u+w fcu",
            B: "chmod u+w,g+w fcu",
            C: "chmod r+w,w+u fcu",
            D: "chmod u+w,w+u fcu"
        },
        answer: "B",
        explanation: "chmod u+w,g+w fcu 命令為用戶（u）和組（g）添加寫入（w）權限。這會使文件所有者和所屬組都具有寫入權限。"
    },
    {
        id: 62,
        q: "View the first five lines of file10. Redirect all errors to /dev/null (Use relative-to-home paths)",
        options: {
            A: "head +5 ~/documents/file10 2>> /dev/null",
            B: "head -5 ~/documents/file10 2>> /dev/null",
            C: "head *5 ~/documents/file10 2>> /dev/null",
            D: "head 5 ~/documents/file10 2>> /dev/null"
        },
        answer: "B",
        explanation: "head -5命令顯示文件的前5行，2>> /dev/null將所有錯誤輸出重定向到/dev/null（丟棄錯誤信息）。~ 表示用戶的主目錄。"
    },
    {
        id: 63,
        q: "Using relative paths only, display the first 5 lines of file1 that contain the text \"test\"",
        options: {
            A: "grep \"test\" mkt/docs2012/file1 | head +5",
            B: "grep \"test\" mkt/docs2012/file1 | head -5",
            C: "grep \"test\" mkt/docs2012/file1 | head 5",
            D: "grep \"test\" mkt/docs2012/file1 | head (5)"
        },
        answer: "B",
        explanation: "grep \"test\" mkt/docs2012/file1找出包含'test'的所有行，然後通過管道傳遞給head -5命令，顯示其中的前5行。"
    },
    {
        id: 64,
        q: "Using relative paths only, display the first 5 lines of file1 that contain the text \"test\"",
        options: {
            A: "wc \"test\" mkt/docs2012/file1 | head 5",
            B: "wc \"test\" mkt/docs2012/file1 | head -5",
            C: "grep \"test\" mkt/docs2012/file1 | head 5",
            D: "grep \"test\" mkt/docs2012/file1 | head -5"
        },
        answer: "D",
        explanation: "這個問題與前一題相同。grep \"test\" mkt/docs2012/file1找出包含'test'的所有行，然後通過管道傳遞給head -5命令，顯示其中的前5行。"
    },
    {
        id: 65,
        q: "Using relative to home paths display the contents of file1 on the screen and append them to file2",
        options: {
            A: "cat ~/file1 | tea -a /documents/file2",
            B: "cat ~/file1 | tee -a /documents/file2",
            C: "cat ~/file1 | tei -a /documents/file2",
            D: "cat ~/file1 | teo -a /documents/file2"
        },
        answer: "B",
        explanation: "cat ~/file1顯示file1的內容，tee -a /documents/file2將內容同時顯示在螢幕上並附加到file2文件中。-a選項表示附加而不是覆蓋。"
    },
    {
        id: 66,
        q: "Using absolute paths count the number of lines of text in file1",
        options: {
            A: "wc -l /home/brian/docs/file1",
            B: "wc -l ~home/brian/docs/file1",
            C: "wc -ll /home/brian/docs/file1",
            D: "wc -ll ~home/brian/docs/file1"
        },
        answer: "A",
        explanation: "wc -l命令用於計算文件中的行數。/home/brian/docs/file1是一個絕對路徑。"
    },
    {
        id: 67,
        q: "Translate all upper case characters in file1 to lower case. Append the output to file2. Use the shortest paths possible.",
        options: {
            A: "tr 'A-Z' 'a-z' < /var/www/html/file1 >> /var/www/cgi-bin/file2",
            B: "tr 'A-Z' 'a-z' > /var/www/html/file1 << /var/www/cgi-bin/file2",
            C: "tr 'a-z' 'A-Z' < /var/www/html/file1 >> /var/www/cgi-bin/file2",
            D: "tr 'a-z' 'A-Z' > /var/www/html/file1 << /var/www/cgi-bin/file2"
        },
        answer: "A",
        explanation: "tr 'A-Z' 'a-z'將大寫字母轉換為小寫字母，< /var/www/html/file1從file1讀取輸入，>> /var/www/cgi-bin/file2將輸出追加到file2。"
    },
    {
        id: 68,
        q: "What command would search the first 8 lines of all files in upload for lines that contain the word \"Author\" (Absolute paths)",
        options: {
            A: "head 8 /var/ftp/upload/* | grep \"Author\"",
            B: "head -8 /var/ftp/upload/* | grep \"Author\"",
            C: "head 8 /var/ftp/upload/* | get \"Author\"",
            D: "head -8 /var/ftp/upload/* | get \"Author\""
        },
        answer: "B",
        explanation: "head -8顯示每個文件的前8行，/var/ftp/upload/*表示upload目錄下的所有文件，grep \"Author\"在這些行中搜索包含'Author'的行。"
    },
    {
        id: 69,
        q: "Using relative paths only, move the contents of html to public",
        options: {
            A: "mov */html ../public",
            B: "mov html/* ../public",
            C: "mv */html ../public",
            D: "mv html/* ../public"
        },
        answer: "D",
        explanation: "mv是移動命令，html/*表示html目錄下的所有內容，../public表示上級目錄下的public目錄。這個命令將html目錄下的所有內容移動到上級目錄的public目錄中。"
    },
    {
        id: 70,
        q: "Using relative paths only, show the contents of the cgi-bin directory including ownership and permissions",
        options: {
            A: "ls cgi-bin",
            B: "ls -a cgi-bin",
            C: "ls -l cgi-bin",
            D: "ls -m cgi-bin"
        },
        answer: "C",
        explanation: "ls -l命令以長格式列出目錄內容，顯示文件或目錄的詳細信息，包括權限、所有者、組、大小、日期等。"
    },
    {
        id: 71,
        q: "Which of the following commands would you use to examine the routing tale on a Linux machine?",
        options: {
            A: "ifconfig -r",
            B: "arp -a",
            C: "mpstat -r",
            D: "netstat -r"
        },
        answer: "D",
        explanation: "netstat -r命令用於顯示路由表信息，包括目的地、網關、子網掩碼等路由信息。"
    },
    {
        id: 72,
        q: "Linux processes have which communication channels available to use?",
        options: {
            A: "standard input (STDIN), and standard output (STDOUT) only",
            B: "standard input (STDIN), standard output (STDOUT), and standard error (STDERR)",
            C: "standard input (STDIN), standard output (STDOUT) and standard system (STDSYD)",
            D: "standard input (STDIN), standard output (STDOUT) and standard redirect (STDRED)"
        },
        answer: "B",
        explanation: "Linux進程有三個基本的通信通道：標準輸入(STDIN)、標準輸出(STDOUT)和標準錯誤(STDERR)，它們分別被分配為文件描述符0、1和2。"
    },
    {
        id: 73,
        q: "Using relaive paths only, show the contents of the cgi-bin directory including ile ownership and permissions",
        options: {
            A: "ps can be used to monitor basic process information, but top must be used to obtain detailed process information.",
            B: "ps can be used to monitor a users processes, prstat must be used to monitor system processes.",
            C: "ps can be used to identify processes that use excessive CPU time",
            D: "top is more accurate than ps for process monitoring"
        },
        answer: "A",
        explanation: "這個問題似乎有誤，選項與問題不匹配。根據選項內容，問題應該是關於進程監控的。ps命令可以顯示基本的進程信息，而top命令可以提供實時更新的更詳細的進程信息。"
    },
    {
        id: 74,
        q: "In Unix process management . . .",
        options: {
            A: "When a process is created it is allocated the same process ID as it's parent.",
            B: "When a process is cloned, the original process is referred to as the parent, and the copy is called the child.",
            C: "A process is allocated an ID each time it enters a running state.",
            D: "User allocated process ID's can be used to manage process states."
        },
        answer: "B",
        explanation: "在Unix進程管理中，當使用fork()系統調用複製（克隆）一個進程時，原始進程被稱為父進程，而副本被稱為子進程。子進程會獲得一個新的進程ID。"
    },
    {
        id: 75,
        q: "Which file permissions will allow for owner - read, write and execute: group - read and write: other read only?",
        options: {
            A: "rwxrw-r--",
            B: "r-xrw-r--",
            C: "r--rw-rwx",
            D: "rwxrwxr--"
        },
        answer: "A",
        explanation: "權限格式為：所有者/組/其他。rwxrw-r--表示所有者有讀(r)、寫(w)、執行(x)權限；組有讀(r)、寫(w)權限；其他用戶只有讀(r)權限。"
    },
    {
        id: 76,
        q: "Which of the following statements is correct?",
        options: {
            A: "All shell scripts use the bash shell.",
            B: "Shell scripts can only be used to automate simple administrative tasks.",
            C: "Administrative shell scripts should emphasise programmer efficiency and code clarity rather than computational efficiency.",
            D: "Scripting can only occur using shell scripts."
        },
        answer: "C",
        explanation: "管理型shell腳本應強調程序員效率和代碼清晰度，而非計算效率。這是因為管理腳本通常用於系統管理任務，更重視可維護性和易讀性。"
    },
    {
        id: 77,
        q: "Which of the following statements is correct?",
        options: {
            A: "Relative path names start at the root /",
            B: "Relative path names are interpreted starting at the current directory.",
            C: "Absolute path names are interpreted starting at the current directory.",
            D: "Absolute path names are limited for use by only the kernel."
        },
        answer: "B",
        explanation: "相對路徑名是從當前目錄開始解釋的。而絕對路徑是從根目錄(/)開始的，與當前目錄無關。"
    },
    {
        id: 78,
        q: "Which of the following is a correct statement?",
        options: {
            A: "HTTP is a stateless, unreliable protocol.",
            B: "HTTP is an unreliable client/server protocol.",
            C: "HTTP is a stateless, client/server protocol.",
            D: "HTTP is a reliable, statefull protocol."
        },
        answer: "C",
        explanation: "HTTP（超文本傳輸協議）是一種無狀態的客戶端/服務器協議。無狀態意味著服務器不會在不同請求之間保留客戶端的信息。"
    },
    {
        id: 79,
        q: "Which of the following is a correct statement?",
        options: {
            A: "HTTP is a stateless, unreliable protocol.",
            B: "HTTP is an unreliable client/server protocol.",
            C: "HTTP is a stateless, client/server protocol.",
            D: "HTTP is a reliable, statefull protocol."
        },
        answer: "C",
        explanation: "這個問題與前一題相同。HTTP（超文本傳輸協議）是一種無狀態的客戶端/服務器協議。"
    },
    {
        id: 80,
        q: "What is syslogd?",
        options: {
            A: "A user level command that submits log entries from the shell.",
            B: "A record of users logins and logouts.",
            C: "A logging daemon for the syslog logging system.",
            D: "A log file rotation policy."
        },
        answer: "C",
        explanation: "syslogd是syslog日誌系統的日誌守護進程。它負責接收、處理和轉發由內核和各種應用程序產生的日誌消息。"
    },
    {
        id: 81,
        q: "Which of the following are Unix file types?",
        options: {
            A: "Regular files, directories, named pipes, process containers",
            B: "Regular files, directories, character device files, memory buffers",
            C: "Regular files, directories, process containers, memory buffers",
            D: "Regular files, directories, named pipes, symbolic links"
        },
        answer: "D",
        explanation: "Unix文件類型包括普通文件、目錄、命名管道（FIFO）和符號鏈接等。還有字符設備文件、塊設備文件和套接字，但選項D最完整。"
    },
    {
        id: 82,
        q: "An advantage of using the command line is . . .",
        options: {
            A: "It usually has more options and is more powerful than a GUI",
            B: "It is easier to use than a GUI",
            C: "It is faster to use than a GUI",
            D: "It has better help facilities"
        },
        answer: "A",
        explanation: "命令行界面通常比GUI提供更多選項，功能更強大，可以執行更複雜的操作，也更容易自動化和腳本化。"
    },
    {
        id: 83,
        q: "How is a new process created in Unix?",
        options: {
            A: "The 'ps -new' command is used to create a new process.",
            B: "An existing process copies itself with the 'fork' system call.",
            C: "The 'exec' command creates a new process.",
            D: "The 'init' command is used to create a new process."
        },
        answer: "B",
        explanation: "在Unix中，新進程是通過現有進程使用'fork'系統調用複製自身來創建的。fork之後，可以使用exec系列函數在子進程中加載新程序。"
    },
    {
        id: 84,
        q: "Which of the following is a correct statment about signals.",
        options: {
            A: "Signals are process-level interupt requests.",
            B: "Signals are process-level system requests.",
            C: "Signals are user-level system requests.",
            D: "Signals are user-level interupt requests."
        },
        answer: "A",
        explanation: "信號是進程級中斷請求，用於通知進程發生了某個事件。它們可以來自操作系統、其他進程或進程本身。"
    },
    {
        id: 85,
        q: "Which of the following statements is correct?",
        options: {
            A: "The IP protocol defines ethernet addressing and framing standards.",
            B: "UDP is an unreliable, connectionless protocol.",
            C: "TCP translates IP addresses to hardware addresses",
            D: "ICMP is used to route data packets"
        },
        answer: "B",
        explanation: "UDP（用戶數據報協議）是一種不可靠、無連接的協議。它不保證數據包的到達、順序或完整性，但開銷較小。"
    },
    {
        id: 86,
        q: "Which command would you use to set a file called 'scriptone' to have execute and read permissions for the owner, execute permission for group, and no permissions for other.",
        options: {
            A: "chmod 015 scriptsone",
            B: "chmod 057 scriptsone",
            C: "chmod 750 scriptsone",
            D: "chmod 510 scriptsone"
        },
        answer: "C",
        explanation: "chmod 750 scriptsone將權限設置為：所有者可讀(4)、可寫(2)、可執行(1)，總和為7；組成員可讀(4)、可執行(1)，總和為5；其他用戶無權限(0)。"
    },
    {
        id: 87,
        q: "Which of the following is the correct first line is a bash script, indicating that the script should be interpreted by /bin/bash?",
        options: {
            A: "/bin/bash",
            B: "#!bash",
            C: "#!/bin",
            D: "#!/bin/bash"
        },
        answer: "D",
        explanation: "#!/bin/bash是bash腳本的正確第一行，稱為shebang行，指示系統應該使用/bin/bash解釋器執行該腳本。"
    },
    {
        id: 88,
        q: "Which command sends a signal to daemon with process ID 3345 to re-read its configuration file.",
        options: {
            A: "kill -9 3345",
            B: "hangup 3345",
            C: "signal TERM 3345",
            D: "kill -1 3345"
        },
        answer: "D",
        explanation: "kill -1 3345命令向進程ID為3345的守護進程發送SIGHUP（掛起）信號，通常用於告訴守護進程重新讀取其配置文件。"
    },
    {
        id: 89,
        q: "The utility that you use to send ICMP echo packets is called ____.",
        options: {
            A: "tcpdump",
            B: "netstat",
            C: "ifconfig",
            D: "ping"
        },
        answer: "D",
        explanation: "ping命令用於發送ICMP回顯數據包到指定主機，並報告是否收到響應以及往返時間，常用於測試網絡連接。"
    },
    {
        id: 90,
        q: "How does SSL secure communications between a web site and a client browser?",
        options: {
            A: "SSL applies IPSec encryption and authentication to HTML.",
            B: "SSL is a variant of the HTML protocol adding encryption and authorisation extensions.",
            C: "SSL combines PKI and DKSIM to provide secure and encrypted HTTP.",
            D: "SSL runs as a layer below HTTP, providing security for the connection but not changing the HTTP transaction inself."
        },
        answer: "D",
        explanation: "SSL（安全套接層）在HTTP協議下層運行，為連接提供安全性，但不改變HTTP事務本身。它通過加密確保數據在傳輸過程中的安全。"
    },
    {
        id: 91,
        q: "Which of the following is a benefit of Amazon Elastic Compute Cloud (Amazon EC2) over physical servers?",
        options: {
            A: "Automated backup",
            B: "Paying only for what you use",
            C: "The ability to choose hardware vendors",
            D: "Root/administrator access"
        },
        answer: "B",
        explanation: "Amazon EC2相比物理伺服器的主要優勢之一是按需付費模式，你只需為實際使用的計算資源付費，而不需要前期投資大量硬體。"
    },
    {
        id: 92,
        q: "Which of the below mentioned services can be used to host virtual servers in the AWS Cloud?",
        options: {
            A: "AWS IAM",
            B: "AWS Server",
            C: "AWS EC2",
            D: "AWS Regions"
        },
        answer: "C",
        explanation: "AWS EC2（Amazon Elastic Compute Cloud）是AWS雲中用於託管虛擬伺服器的服務，它提供可擴展的計算容量。"
    },
    {
        id: 93,
        q: "Which of the following can be used to protect EC2 Instances hosted in AWS.",
        options: {
            A: "Usage of Security Groups",
            B: "Usage of AMI's",
            C: "Usage of Private IPs",
            D: "Usage of the Internet gateway"
        },
        answer: "A",
        explanation: "安全組（Security Groups）用於保護AWS中的EC2實例，它們充當虛擬防火牆，控制進出實例的流量。"
    },
    {
        id: 94,
        q: "You work for a company that is planning on using the AWS EC2 service. They currently create golden images of their deployed Operating system. Which of the following correspond to a golden image in AWS.",
        options: {
            A: "EBS Volumes",
            B: "EBS Snapshots",
            C: "Amazon Machines Images",
            D: "EC2 Copies"
        },
        answer: "C",
        explanation: "在AWS中，「黃金鏡像」對應的是Amazon Machine Images (AMIs)。AMI包含了啟動EC2實例所需的軟件配置（操作系統、應用程序等）。"
    },
    {
        id: 95,
        q: "Your company has a set of EC2 Instances hosted in AWS. There is a requirement to create snapshots from the EBS volumes attached to these EC2 Instances in another geographical location. As per this requirement, where would you create the snapshots?",
        options: {
            A: "In another Availability Zone",
            B: "In another data center",
            C: "In another Region",
            D: "In another Edge location"
        },
        answer: "C",
        explanation: "要在另一個地理位置創建EBS卷的快照，應該在另一個AWS區域（Region）中創建快照。區域是AWS在全球不同地理位置的數據中心集合。"
    },
    {
        id: 96,
        q: "Which of the below mentioned services is equivalent to hosting virtual servers on an on-premises location?",
        options: {
            A: "AWS IAM",
            B: "AWS Server",
            C: "AWS EC2",
            D: "AWS Regions"
        },
        answer: "C",
        explanation: "AWS EC2（Elastic Compute Cloud）相當於在本地數據中心托管虛擬服務器。它提供可調整大小的虛擬計算環境。"
    },
    {
        id: 97,
        q: "What does Amazon EC2 provide?",
        options: {
            A: "Virtual servers in the Cloud.",
            B: "A platform to run code (Java, PHP, Python), paying on an hourly basis.",
            C: "Computer Clusters in the Cloud.",
            D: "Physical servers, remotely managed by the customer."
        },
        answer: "A",
        explanation: "Amazon EC2（Elastic Compute Cloud）提供雲端虛擬伺服器，讓用戶可以在AWS雲基礎設施上運行應用程序。"
    },
    {
        id: 98,
        q: "Which application in Sandbox can be used to do the copy/paste?",
        options: {
            A: "Desktop.",
            B: "Eclipse.",
            C: "Spyder.",
            D: "pgAdmin."
        },
        answer: "A",
        explanation: "在沙盒環境中，Desktop應用程序通常可以用來執行複製/粘貼操作，因為它提供了標準的桌面環境功能。"
    },
    {
        id: 99,
        q: "What is the port number for SSH?",
        options: {
            A: "12.",
            B: "22.",
            C: "32.",
            D: "42."
        },
        answer: "B",
        explanation: "SSH（安全Shell）的默認端口號是22。SSH是一種加密的網絡協議，用於在不安全的網絡上安全地操作網絡服務。"
    },
    {
        id: 100,
        q: "What is the port number for HTTP?",
        options: {
            A: "22",
            B: "23",
            C: "80",
            D: "443"
        },
        answer: "C",
        explanation: "端口號 80 是 HTTP (Hypertext Transfer Protocol) 用於網頁瀏覽的標準端口。"
    },
    {
        id: 101,
        q: "Which command is Cut for nano?",
        options: {
            A: "^G",
            B: "^K",
            C: "^U",
            D: "^X"
        },
        answer: "B",
        explanation: "在 nano 編輯器中，Ctrl+K (^K) 用於剪下當前行。"
    },
    {
        id: 102,
        q: "Which command is Paste for nano?",
        options: {
            A: "^G",
            B: "^K",
            C: "^U",
            D: "^X"
        },
        answer: "C",
        explanation: "在 nano 編輯器中，Ctrl+U (^U) 用於貼上先前剪下的內容。"
    },
    {
        id: 103,
        q: "Which command is Close/ Exit from nano?",
        options: {
            A: "^G",
            B: "^K",
            C: "^U",
            D: "^X"
        },
        answer: "D",
        explanation: "在 nano 編輯器中，Ctrl+X (^X) 用於關閉/退出編輯器。如果文件已修改，它會提示您是否保存更改。"
    },
    {
        id: 104,
        q: "Which list command option can be used to see hidden files?",
        options: {
            A: "ls -a",
            B: "ls -d",
            C: "ls -h",
            D: "ls -l"
        },
        answer: "A",
        explanation: "ls 命令的 -a 選項用於顯示所有文件，包括以點 (.) 開頭的隱藏文件。"
    },
    {
        id: 105,
        q: "Which command displays the first 50 lines of file.txt?",
        options: {
            A: "head -50 file.txt",
            B: "head -f50 file.txt",
            C: "head -l50 file.txt",
            D: "head -n50 file.txt"
        },
        answer: "D",
        explanation: "head 命令用於顯示文件的開頭部分。-n 選項後接數字，用於指定顯示的行數。因此，head -n50 file.txt 會顯示 file.txt 的前 50 行。選項 A head -50 file.txt 在某些系統上也可能有效，但 -n 是更標準和明確的選項。"
    },
    {
        id: 106,
        q: "Which command replicates the standard output?",
        options: {
            A: "to",
            B: "tr",
            C: "tee",
            D: "tail"
        },
        answer: "C",
        explanation: "tee 命令從標準輸入讀取數據，並將其同時寫入標準輸出和一個或多個文件，從而複製標準輸出。"
    },
    {
        id: 107,
        q: "Which command changes to root account?",
        options: {
            A: "sudo -r",
            B: "sudo -s",
            C: "sudo -t",
            D: "sudo -u"
        },
        answer: "B",
        explanation: "sudo -s 命令用於以 root 用戶身份執行 shell，從而切換到 root 帳戶。"
    },
    {
        id: 108,
        q: "Which command installs an Apache Web server?",
        options: {
            A: "yum install httpd",
            B: "yum install server",
            C: "yum install sudo",
            D: "yum install web"
        },
        answer: "A",
        explanation: "在基於 RPM 的 Linux 發行版（如 CentOS、RHEL）中，yum install httpd 命令用於安裝 Apache HTTP 伺服器 (httpd)。"
    },
    {
        id: 109,
        q: "Which command to suspend a job?",
        options: {
            A: "^C",
            B: "^Q",
            C: "^X",
            D: "^Z"
        },
        answer: "D",
        explanation: "Ctrl+Z (^Z) 是用於暫停（掛起）當前正在前景運行的作業的命令。"
    },
    {
        id: 110,
        q: "Which command puts a job into the background?",
        options: {
            A: "bg $1",
            B: "bg %1",
            C: "bg &1",
            D: "bg *1"
        },
        answer: "B",
        explanation: "bg %1 命令用於將作業號為 1 的已暫停作業放到背景執行。% 符號用於引用作業號。"
    },
    {
        id: 111,
        q: "What system directory contains Apache Web pages?",
        options: {
            A: "/var/www",
            B: "/var/www/html",
            C: "/www/html",
            D: "/html/www"
        },
        answer: "B",
        explanation: "在許多 Linux 發行版中，Apache 網頁的默認根目錄是 /var/www/html。有些舊系統或不同配置可能是 /var/www。"
    },
    {
        id: 112,
        q: "Which command displays the public IP address of an EC2?",
        options: {
            A: "ip address",
            B: "ip ifconfig",
            C: "ifconfig.me",
            D: "curl ifconfig.me"
        },
        answer: "D",
        explanation: "curl ifconfig.me 命令會向 ifconfig.me 服務發出請求，該服務會返回請求來源的公共 IP 地址。這是在 EC2 實例內部獲取其公共 IP 的一種常用方法。"
    },
    {
        id: 113,
        q: "Which command displays the private IP address of an EC2?",
        options: {
            A: "hostname",
            B: "hostname -A",
            C: "hostname -I",
            D: "hostname -P"
        },
        answer: "C",
        explanation: "hostname -I 命令用於顯示主機的所有網絡接口的 IP 地址，這通常包括 EC2 實例的私有 IP 地址。"
    },
    {
        id: 114,
        q: "What file will be created after executing cc -c hello.c on Unix?",
        options: {
            A: "a.out",
            B: "hello",
            C: "hello.o",
            D: "hello.exe"
        },
        answer: "C",
        explanation: "cc -c hello.c 命令中的 -c 選項告訴編譯器只編譯源文件 hello.c 並生成目標文件 (object file)，而不進行鏈接。目標文件的默認名稱通常是源文件名加上 .o 後綴，即 hello.o。"
    },
    {
        id: 115,
        q: "Which command deletes all files with symbol, “~” at the end of filenames?",
        options: {
            A: "rm *~",
            B: "rm ?~",
            C: "rm t~",
            D: "rm ~t"
        },
        answer: "A",
        explanation: "rm *~ 命令使用通配符 * 來匹配任何字符序列，然後跟隨一個波浪號 (~)。因此，它會刪除所有以波浪號結尾的文件。"
    },
    {
        id: 116,
        q: "What is the primary purpose of PuTTY?",
        options: {
            A: "To edit text files remotely",
            B: "To securely connect to remote servers via SSH, Telnet, or Rlogin",
            C: "To monitor network traffic in real-time",
            D: "To compress files for faster transfers"
        },
        answer: "B",
        explanation: "PuTTY 是一個免費開源的終端模擬器、串行控制台和網絡文件傳輸應用程序。它的主要目的是通過 SSH、Telnet 或 Rlogin 等協議安全地連接到遠程服務器。"
    },
    {
        id: 117,
        q: "Which file format does PuTTY use to save session configurations?",
        options: {
            A: ".ppk",
            B: ".txt",
            C: ".reg",
            D: ".inx"
        },
        answer: "C",
        explanation: "PuTTY 將會話配置信息保存在 Windows 註冊表中。用戶可以導出這些設置為 .reg 文件進行備份或遷移。 .ppk 文件是 PuTTY 用於存儲私鑰的文件格式。"
    },
    {
        id: 118,
        q: "What is the primary purpose of the `sudo` command?",
        options: {
            A: "To switch to the root user permanently",
            B: "To delete system files without confirmation",
            C: "To monitor system resource usage",
            D: "To allow permitted users to execute commands as the superuser or another user"
        },
        answer: "D",
        explanation: "sudo (superuser do) 命令允許授權用戶以超級用戶（通常是 root）或其他用戶的身份執行命令，而無需知道目標用戶的密碼。"
    },
    {
        id: 119,
        q: "What is the primary purpose of SSH?",
        options: {
            A: "To transfer files between computers without encryption",
            B: "To scan networks for open ports",
            C: "To provide a secure encrypted connection for remote command-line access",
            D: "To manage Windows desktop environments"
        },
        answer: "C",
        explanation: "SSH (Secure Shell) 是一種網絡協議，用於在不安全的網絡上安全地操作網絡服務。它最常見的應用是提供對遠程計算機的安全加密命令行訪問。"
    },
    {
        id: 120,
        q: "What is the primary purpose of the `httpd` service?",
        options: {
            A: "To act as a DNS server for domain resolution",
            B: "To provide a secure shell (SSH) connection",
            C: "To manage local firewall rules",
            D: "To serve web pages and applications over HTTP/HTTPS"
        },
        answer: "D",
        explanation: "httpd (HTTP Daemon) 是 Apache HTTP 服務器的守護進程名稱。它的主要目的是通過 HTTP 或 HTTPS 協議提供網頁和應用程序。"
    },
    {
        id: 121,
        q: "Which command is commonly used to check if `httpd` is running on a Linux system?",
        options: {
            A: "`httpd --status`",
            B: "`systemctl status httpd`",
            C: "`netstat -d`",
            D: "`curl httpd`"
        },
        answer: "B",
        explanation: "在現代使用 systemd 的 Linux 系統中，`systemctl status httpd` 命令用於檢查 httpd（Apache HTTP 服務器）服務的狀態，包括它是否正在運行。"
    },
    {
        id: 122,
        q: "What is the primary purpose of the `ping` command?",
        options: {
            A: "To trace the route packets take to a destination",
            B: "To display IP configuration details",
            C: "To test reachability and measure round-trip time to a host",
            D: "To resolve DNS hostnames"
        },
        answer: "C",
        explanation: "`ping` 命令用於測試網絡連接，通過向目標主機發送 ICMP echo 請求數據包並等待響應，來檢測主機的可達性並測量往返時間。"
    },
    {
        id: 123,
        q: "Which `ipconfig` command displays the physical (MAC) address of your network adapters?",
        options: {
            A: "`ipconfig /all`",
            B: "`ipconfig /mac`",
            C: "`ipconfig /showmac`",
            D: "`ipconfig /details`"
        },
        answer: "A",
        explanation: "在 Windows 操作系統中，`ipconfig /all` 命令會顯示所有網絡適配器的詳細配置信息，包括其物理地址 (MAC 地址)。"
    },
    {
        id: 124,
        q: "What is the primary purpose of the command `curl ifconfig.me`?",
        options: {
            A: "Retrieve the public/external IP address of your internet connection",
            B: "Display the local network interface configuration",
            C: "Test the latency to a remote server",
            D: "Check the local DNS resolver cache"
        },
        answer: "A",
        explanation: "命令 `curl ifconfig.me` 使用 curl 工具向 ifconfig.me 網站發出請求，該網站會返回請求來源的公共/外部 IP 地址。"
    },
    {
        id: 125,
        q: "What is the primary function of WinSCP?",
        options: {
            A: "To monitor network traffic and analyze packets",
            B: "To scan for viruses on remote servers",
            C: "To compress and encrypt files for backup purposes",
            D: "To securely transfer files between a local and remote computer"
        },
        answer: "D",
        explanation: "WinSCP 是一個 Windows 平台上的免費開源 SFTP、SCP、FTP 和 WebDAV 客戶端。其主要功能是在本地計算機和遠程計算機之間安全地傳輸文件。"
    },
    {
        id: 126,
        q: "Which protocol does WinSCP use by default for encrypted file transfers?",
        options: {
            A: "HTTP",
            B: "Telnet",
            C: "SFTP",
            D: "RDP"
        },
        answer: "C",
        explanation: "WinSCP 默認使用 SFTP (SSH File Transfer Protocol) 進行加密文件傳輸。SFTP 是 SSH 協議的擴展，提供安全的文件傳輸功能。"
    },
    {
        id: 127,
        q: "What is the primary purpose of a private key in asymmetric encryption?",
        options: {
            A: "To publicly share with others for secure communication",
            B: "To decrypt data encrypted with its corresponding public key",
            C: "To act as a password for user login on websites",
            D: "To generate random numbers for encryption"
        },
        answer: "B",
        explanation: "在非對稱加密中，私鑰由其所有者保密，用於解密使用相應公鑰加密的數據，或用於創建數字簽名。公鑰可以公開共享。"
    }
    // 繼續添加更多題目...
];

// 如果獨立的 app.js 文件不存在，則此處也可包含應用程序的邏輯
// 請確保輸出格式，以便將數據導出給主應用程序使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}