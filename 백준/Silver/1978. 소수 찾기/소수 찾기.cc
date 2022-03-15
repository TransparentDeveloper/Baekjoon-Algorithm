#include <iostream>

using namespace std;

int is_prime(int su) {
    if (su == 1)	return 0;
    if (su != 2 && su % 2 == 0) return 0;
    else
        for (int i = 3; i < su / 2; i += 2)
            if (su % i == 0)
                return 0;
    return 1;
}

int main() {
    int attempt=0;
    int num = 0;
    int prime_counter = 0;
    cin >> attempt;

    for (int i = 0; i < attempt; i++) {
        cin >> num;
        prime_counter += is_prime(num);
    }

    printf("%d", prime_counter);
}