package jp.co.yoshino.meat_p.controller;


import java.io.IOException;

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
		return "test";
	}
	
}