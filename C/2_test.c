#include <stdio.h>
#include <windows.h>

int main() {
    for (int i = 1; i <= 100; i++) {
    //forもifも書き方はjsと同じ(厳密にいうとjsがCをまねたからこっちが元ではある)
        if (i % 3 == 0) {
            printf("%d\n", i);
        }
    }
    return 0;
    //ここでOS側に0を伝えてあげることを忘れずに。
}
