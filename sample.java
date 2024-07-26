      // =======DSA Array oprations=============//
     


      // ========find sum=====//

      // public class sample {
      //       public static int[] twoNumberSum(int[] Array,int target){
      //             for(int i=0; i<Array.length-1; i++){
      //                   for(int j=i+1; j<Array.length; j++){
      //                         if(Array[i] + Array[j]==target){
      //                               return new int[]{Array[i],Array[j]};
      //                         }
      //                   }
      //             }
      //                   return new int[0];
      //             }
      //             public static void main(String[] args){
      //                   int[] Array={6,3,2,4,5,7,8};
      //                   int target=10;
      //                   int [] result = twoNumberSum(Array,target);
      //                   for(int i=0; i<result.length; i++){
      //                         System.out.println(result[i]);
      //                   }
      //             }
      //       }
      

      // another way


      // import java.util.HashSet;
      // import java.util.Set;
      
      // public class sample {
      //     public static int[] twoNumberSum(int[] array, int target) {
      //         Set<Integer> nums = new HashSet<>();
      //         for (int i = 0; i < array.length; i++) {
      //             int num = array[i];
      //             int match = target - num;
      //             if (nums.contains(match)) {
      //                 return new int[]{num, match};
      //             } else {
      //                 nums.add(num);
      //             }
      //         }
      //         return new int[0];
      //     }
      
      //     public static void main(String[] args) {
      //         int[] array = {6, 5, 7, 9, 4, 0, 2};
      //         int target = 12;
      //         int[] result = twoNumberSum(array, target);
      //         for (int i = 0; i < result.length; i++) {
      //             System.out.println(result[i]);
      //         }
      //     }
      // }
      

      