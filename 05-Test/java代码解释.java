package com.baozi.ceshi;// 这行package的代码完全不用管

// 这两行代码是用到Java的类库中的一些类，JS中肯定也有一些库，如字符串处理函数等等。
// 在java里像字符串处理函数等定义好的函数是在类里的，也是给我们拿来用的
import java.util.ArrayList;
import java.util.Scanner;

public class Main { // java代码都是放到一个类里的，向这个Main就是一个类，Java是规定这样的程序结构的，你不用管
	// 下面的main，help是两个函数
	// main就像是c语言里的main，一个程序总有个开始运行的地方，java里就是这个main函数
	public static void main(String[] args) {
		// 这个Scanner，你可以理解为一个工具，这个工具是从控制台读取输入值的。
		// 假设此时控制台输入1.1 2.2，那么经过下面三行代码后，str1中存储着1.1，str2中存储着2.2
		Scanner in = new Scanner(System.in);
		String str1 = in.nextLine();
		String str2 = in.nextLine();

		// 这个是调用核心算法算法的代码
		ArrayList<String> help = help(str1, str2);

		// 这个就是将help函数得到的结果打印出来
		for (String s : help) {
			System.out.print(s + " ");
		}
	}

	// 这个非main的函数，函数名可自己定义的，才是题目的算法核心，你只要转换好这个函数就好了
	// 上面main函数，是拿到输入值，调用这个核心算法函数，然后再把结果打印。
	public static ArrayList<String> help(String str1, String str2) {
		// 像ArrayList可以理解像数组一样存储东西，但是比数组功能强大一些。
		ArrayList<String> list = new ArrayList<>();

		// 下面其他的代码，应该在js中都有函数替换的，
		// 像split，js中应该也有，就是分隔字符串的函数，如1.2经过split(.)后，那么得到[1,2]，他用split("\\.")是因为.在正则表达式中有特殊的含义，这里给转义了。
		String[] split1 = str1.split("\\.");
		String[] split2 = str2.split("\\.");
		// 像这种length、max的功能就是他的字面含义，js中应该有对应的函数
		int len = Math.max(split1.length, split2.length);
		// 像这种是定义变量的，跟c语言一样，js中变量类型都是var，这里会区分int、double之类的。
		int index = 0;
		while (index < len) {
			int s1 = (index > split1.length - 1) ? 0 : Integer.valueOf(split1[index]);
			int s2 = (index > split2.length - 1) ? 0 : Integer.valueOf(split2[index]);
			if (s1 < s2) {
				// 这个list上面说过了，可以理解为跟数组一样，list.add就是把str1加到数组中，理解为arr[i]=str1
				list.add(str1);
				list.add(str2);
				break;
			} else if (s1 > s2) {
				list.add(str2);
				list.add(str1);
				break;
			} else {
				index++;
			}

		}
		return list;
	}
}
