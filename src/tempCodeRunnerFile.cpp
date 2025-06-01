#include <iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    int count=1;
    for(int j=1;j<=n;j++){
        for(int i=1;i<=n;i++){
        cout<<i<<" ";
        count=count+1;
        }
        cout<<endl;
        
    }
    

    return 0;
}
    