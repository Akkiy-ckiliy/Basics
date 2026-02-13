#include <stdio.h>
#include <stdlib.h>

struct Player {
    char name[20];
    int hp;
};

int main() {
    
    struct Player *p;
    //
    
    p = (struct Player *)malloc(sizeof(struct Player));
    //mallocは後ろから読んでくと理解しやすいかもって。
    //Playerの合計バイト数を数えてサイズを取得、そうするとmallocがvoid *の空きメモリを持ってくるからそれにPlayerって名前を付けて所有権を付与、その情報をpで保持しておく。

    if (p == NULL) {
        return 1;
    }

    p->hp = 100;

    free(p);
    //使い終わったメモリを返却。これを打つまで一生返却されないのでメモリリークにならないように注意。使ったら戻す。

    return 0;
}