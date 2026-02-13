#include <stdio.h>
#include <string.h>
//文字列という概念がないので関数に任せる都合上あらかじめ知っておく必要があるので書くもの

struct Student
{
    int id; //4バイト
    char name[50]; //char型は変数名の横に[]であらかじめ必要バイト数を決めておく
    float score; //4バイト
};
//計58バイト使用。

int main() {
    struct Student s1;

    s1.id = 1001;
    strcpy(s1.name, "Sato");
    //C言語でs1.name = "Sato"って書くと、nameの住所をSatoの住所で書き換えちゃう禁止行為(最初に用意した50バイトが消し去る)になるんで
    //Sとaとtとoをそれぞれ分けた中身だけをコピペして中身だけを変えてるやつ。
    //メモリリーク(誰も使えないメモリの土地)が発生しちゃう。
    s1.score = 85.5f;

    printf("学籍番号: %d, 名前: %s, スコア: %.1f\n", s1.id, s1.name, s1.score);

    return 0;
}