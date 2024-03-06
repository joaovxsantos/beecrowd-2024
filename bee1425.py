# Feito em Python pq em JS não deu

while True:
    x = int(input())

    if(x == 0): 
        break

    #looping for row and columns
    for i in range(0, x):
        for j in range(0, x):
            
            #row
            if(i< x-i-1):
                distR = i
            else:
                distR = x-i-1

            #column
            if(j < x-j-1):
                distC = j
            else:
                distC = x-j-1

            #
            if(distC < distR):
                dist = distC
            else:
                dist = distR
            
            print("%3d" %(dist+1) , end="")
            
            if (j != x-1):
                print(end=" ")
        print()
    print()
