package jp.co.yoshino.meat_p.controller;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class MainController {
	
	/**Top画面に遷移*/
	@RequestMapping("/")
	public String index() {
		return "top";
	}
	
	/**テストページ
	 * @throws IOException */
	@RequestMapping("/test")
	public String getTest() throws IOException {
		List<Element> elementList= test();
		for(int i=0; i<elementList.size();i++) {
			System.out.println(i+":"+elementList.get(i));
			};
		return "test";
	}
		
	public List<Element> test() throws IOException {
		Document document =Jsoup.connect("https://cookpad.com/search/肩ロース").get();
		Elements elements = document.getElementsByClass("recipe-preview");
		List<Element> elementsList= new ArrayList<>();
		for(Element element: elements) {
			elementsList.add(element);
		}
		return elementsList;
	}
}