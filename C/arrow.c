#include <stdio.h>
#include <string.h>

struct Player {
    char name[20];
    int hp;
};

void heal(struct Player *p) {

    p->hp += 50;
    //アロー演算子。「.」と違ってデータではなくアドレスを覗くのでデータをいちいち全部コピーするっていう手間が省ける
    
    printf("%s のHPを50回復した!\n", p->name);
}

int main() {
    struct Player sato = { "Sato", 30 };

    printf("回復前: %d\n", sato.hp);

    heal(&sato);

    printf("回復後: %d\n", sato.hp);

    return 0;
}
