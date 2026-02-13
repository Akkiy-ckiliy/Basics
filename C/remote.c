#include <stdio.h>
#include <windows.h>

int main() {
    SetConsoleOutputCP(65001);

    int num = 100;
    int *p = &num;
    //*がついてるものは住所(ポインター)。 型 * 変数(実行先)で使う(別に全部を使う必要はない) 型*なら型変換だし *変数なら実行文

    printf("元の値: %d\n", num);
    //%dは2進数を10進数に変換してくれるやつ

    *p = 500;

    printf("書き換え後の値: %d\n", num);

    return 0;
}