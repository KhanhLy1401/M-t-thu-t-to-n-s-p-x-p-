## Mô phỏng thuật toán sắp xếp 
### Mục lục
[I. Cài đặt và chạy](#Caidat)

[II.Giới thiệu các thuật toán sắp xếp](#Modau)

[III.Danh sách các thuật toán sắp xếp](#Danhsach)
- [1. Bubble Sort](#bubble)
- [2. Insertion Sort](#insertion)
- [3. Selection Sort](#selection)
- [4. Merge Sort](#merge)
- [5. Quick Sort](#quick)



===========================

<a name="Modau"></a>

## I. Cài đặt và chạy

***Nếu máy tính đã cài đặt git và Visual studio code:***

- Bước 1: Click on vào button Code và Copy link HTTPS
<img  src=.githubPage.png >
- Bước 2: Tạo một folder chứa code chuẩn bị clone về trên máy của bạn.
VD: This PC > Local Disk (D) > Start Github
- Bước 3: Click on chuột phải vào tên folder vừa tạo và select `Git Bash Here` (Option này chỉ hiện khi bạn đã download Git về máy tính thành công)
- Bước 4: Phần mềm Git open bạn gõ câu lệnh `git clone +  url vừa copy`. Sau đó nhấn Enter và chờ code được clone về máy
- Bước 5: Mở dự án trên Visual Studio Code

***Nếu máy tính chưa có git***

- Download file zip của của dự án về và giải nén trên máy tính bằng cách nhấn vào Download ZIP
<img  src=.\img\zip.png >
- Hướng dẫn cài và sử dụng git https://www.hostinger.vn/huong-dan/huong-dan-su-dung-git-lenh-git-co-ban

***Cách cài Visual Studio Code***
- Cách cài Visual Studio Code [ https://gitiho.com/blog/huong-dan-cai-dat-visual-studio-code-cho-nguoi-moi-hoc-lap-trinh.html ]
- Cài liver Server để chạy https://www.youtube.com/watch?v=E2sRb9kjHaM

## II. Giới thiệu các thuật toán sắp xếp 
Sắp xếp là quá trình bố trí lại các phần tử trong một tập hợp theo một trình tự nào đó nhằm mục đích giúp quản lý và tìm kiếm các phần tử dễ dàng và nhanh chóng hơn. 

<a name="Danhsach"></a>
## III. Danh sách các thuật toán sắp xếp 
<a name="bubble"></a>
### 1. Bubble Sort

***Ý tưởng***
- Xuất phát từ đầu dãy, đổi chỗ các cặp phần tử kề nhau để đưa phần tử lớn hơn trong cặp phần tử đó về vị trí cuối dãy , sau đó sẽ không xét đến nó ở bước tiếp theo, Ở lần xử lý thứ i phần tử đó có vị trí tính cuối dãy là i.
- Lặp lại xử lý trên cho đến khi không còn cặp phần tử nào để xét.

***Đánh giá***
- Số lượng các phép so sánh xảy ra không phụ thuộc vào tình trạng của dãy số ban đầu.
- Số lượng phép hoán vị thực hiện tùy thuộc vào kết quả so sánh.
- Độ phức tạp: 

|Worst Case|Average Case|Best Case|
|---|---|---|
|O(n<sup>2</sup>)|Θ(n<sup>2</sup>)|Ω(n)|

|Stable?|
|---|
|Yes|


***Mô tả***
- Màu (`#cbd5e1`) <img  src=.\img\white.png height="15"> mô tả các phần tử chưa được sắp xếp
- Màu (`#ff0000`) <img  src=.\img\red.png height="15"> mô tả hai phần tử đang được xét để đảo vị trí
- Màu (`#55a630`) <img  src=.\img\green.png height="15"> là những phần tử đã được xét xong và không cần xét ở các bước tiếp theo
<img src=.\img\bubbleSort.png>

<a name="insertion"></a>
### 2.Insertion Sort

***Ý tưởng***

-  So sánh các phần tử để quyết định vị trí của một phần tử trong mảng đã được sắp xếp một phần.
- Tìm cách chèn phần tử a[i] vào vị trí thích hợp của đoạn đã được sắp để có dãy mới a[0], a[1], ..., a[n-1] trở nên có thứ tự.
- Vị trí này chính là pos thỏa: `a[pos-1] <= a[i ] < a[pos] (1 <= pos <= i)`

 ***Đánh giá***
- Giải thuật thực hiện tất cả N-1 vòng lặp tìm pos, do số lượng phép so sánh và dời chỗ này phụ thuộc vào tình trạng của dãy số ban đầu.
- Độ phức tạp thuật toán:

|Worst Case|Average Case|Best Case|
|---|---|---|
|O(n<sup>2</sup>)|Θ(n<sup>2</sup>)|Ω(n)|

|Stable?|
|---|
|Yes|

***Mô tả***
- Màu (`#cbd5e1`) <img  src=.\img\white.png height="15"> mô tả các phần tử chưa được sắp xếp
- Màu (`#ff0000`) <img  src=.\img\red.png height="15"> mô tả phần tử đang được xét để đảo vị trí
- Màu (`#a47148`) <img  src=.\img\brown.png height="15"> mô tả phần tử được dùng để so sánh với phần tử đang xét nếu phần tử đó nhỏ hơn thì có màu nâu và phần tử được xét sẽ chèn vào phần tử màu nâu cuối cùng
- Màu (`#55a630`) <img  src=.\img\green.png height="15"> là những phần tử đã được xét xong và không cần xét ở các bước tiếp theo
<img src=.\img\insertionSort.png>

<a name="selection"></a>
### 3. Selection Sort

***Ý tưởng*** 
- Mô phỏng một trong những cách sắp xếp tự nhiên nhất trong thực tế:
  - Chọn phần tử nhỏ nhất trong n phần tử ban đầu, đưa phần tử này về vị trí đúng là đầu dãy hiện hành.
  - Xem dãy hiện hành chỉ còn n-1 phần tử của dãy ban đầu, bắt đầu từ vị trí thứ 2; lặp lại quá trình trên cho dãy hiện hành... đến khi dãy hiện hành chỉ còn 1 phần tử.

***Đánh giá***
- Ở lượt thứ  i, cần  (n-i) lần so sánh để xác định phần tử nhỏ nhất hiện hành.
- Số lượng phép so sánh không phụ thuộc vào tình trạng của dãy số ban đầu.
- Độ phức tạp:

|Worst Case|Average Case|Best Case|
|---|---|---|
|O(n<sup>2</sup>)|Θ(n<sup>2</sup>)|Ω(n<sup>2</sup>)|

|Stable?|
|---|
|No|

***Mô tả***
- Màu (`#cbd5e1`) <img  src=.\img\white.png height="15"> mô tả các phần tử chưa được sắp xếp
- Màu (`#ff0000`) <img  src=.\img\red.png height="15"> mô tả hai phần tử đang được xét để đảo vị trí
- Màu (`#55a630`) <img  src=.\img\green.png height="15"> là những phần tử đã được xét xong và không cần xét ở các bước tiếp theo
<img src=.\img\selectionSort.png>

<a name="quick"></a>
### 4. Quick Sort
***Lý thuyết***
- Quick Sort là một giải thuật hiệu quả cao và dựa trên việc chia mảng dữa liệu thành các mảng nhỏ hơn. Giải thuật sắp xếp nhanh chia mảng thành hai phần bằng cách so sánh từng phần tử của mảng với một phần tử được chọn gọi là phần tử chốt (pivot): một mảng bao gồm các phần tử nhỏ hơn hoặc bằng phần tử chốt và mảng còn lại bao gồm các phần tử lớn hơn hoặc bằng phần tử chốt.
- Tiến trình chia này diễn ra tiếp tục cho tới khi độ dài của các mảng con đều bằng 1. Giải thuật sắp xếp nhanh tỏ ra khá hiệu quả với các tập dữ liệu lớn khi mà độ phức tạp trường hợp trung bình và trường hợp xấu nhất là O(nlogn) với n là số phần tử.
- Kỹ thuật chọn phần tử chốt ảnh hưởng khá nhiều đến khả năng rơi vào các vòng lặp vô hạn đối với các trường hợp đặc biệt. Tốt nhất là chọn phần tử chốt (pivot) nằm ở trung vị của danh sách. Khi đó, sau log2(n) lần chia chúng ta sẽ đạt tới kích thước các mảng con bằng 1.

 ***Ý tưởng*** 
- Khởi tạo biến l và r là chỉ số đầu và cuối của đoạn cần sắp xếp, khởi tạo `l = 0` và `r = n-1`
- Xác định phần tử chốt trong dãy `p = a[(l+r)/2]`
- Sử dụng biến i và biến j để chia dãy thành 2 phần. Biến i sẽ chạy từ l đến r và biến j sẽ chạy từ r về l. Nếu phát hiện `a[i] >= p` và `a[j] <= p` thì dừng lại và tráo đổi ví trí của chúng.

***Mô tả***
- Màu (`#cbd5e1`) <img  src=.\img\white.png height="15"> mô tả các phần tử chưa được sắp xếp
- Màu (`#ff0000`) <img  src=.\img\red.png height="15"> mô tả phần tử đang được chọn làm chốt
- Màu (`#a47148`) <img  src=.\img\brown.png height="15"> mô tả phần tử được dùng để so sánh với phần tử đang xét nếu phần tử đó nhỏ hơn thì có màu (`#ffa500`) <img  src=.\img\yellow.png height="15"> 
-   Màu (`#52b69a`) <img  src=.\img\blue.png height="15"> mô tả phần tử chốt đã được di chuyển và không được chọn làm chốt nữa
- Màu (`#55a630`) <img  src=.\img\green.png height="15"> là những phần tử đã được xét xong và xếp đúng vị trí 

<img src=.\img\quickSort.png>

<a name="merge"></a>
### 5. Merge Sort

***Ý tưởng***
- Giống như QuickSort, Merge Sort là một thuật toán Chia và Chinh phục. Nó chia mảng đầu vào thành hai nửa, gọi chính nó cho hai nửa và sau đó hợp nhất hai nửa đã sắp xếp. 
- Hàm merge () được sử dụng để hợp nhất hai nửa. Hợp nhất (arr, l, m, r) là quá trình quan trọng giả định rằng arr [l..m] và arr [m + 1..r] được sắp xếp và hợp nhất hai mảng con đã sắp xếp thành một.

***Đánh giá***
- So sánh các phần tử của hai phần tử đã sắp xếp để hợp nhất chúng thành mảng được sắp xếp cuối cùng.
- Độ phức tạp thuật toán :

|Worst Case|Average Case|Best Case|
|---|---|---|
|O(n log(n))|Θ(n log(n))|Ω(n log(n))|

|Stable?|
|---|
|Yes|

***Mô tả***
- Màu (`#cbd5e1`) <img  src=.\img\white.png height="15"> mô tả các phần tử chưa được sắp xếp
- Trong mảng đang được chọn để sắp xếp: Màu (`#ffa500`) <img  src=.\img\yellow.png height="15"> mô tả các phần tử thuộc bên trái và Màu (`#ff0000`) <img  src=.\img\red.png height="15"> mô tả phần tử  thuộc bên phải để so sánh và sắp xếp
- Màu (`#52b69a`) <img  src=.\img\blue.png height="15"> mô tả phần tử đã được sắp xếp tạm thời
- Màu (`#55a630`) <img  src=.\img\green.png height="15"> là những phần tử đã được xét xong và xếp đúng vị trí 

<img src=.\img\mergeSort.png>



