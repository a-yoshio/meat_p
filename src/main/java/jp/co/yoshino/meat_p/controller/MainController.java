package jp.co.yoshino.meat_p.controller;

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
	
	/**詳細を開く*/
	@RequestMapping("/detail")
	public String getDetail() {
		return "detail";
	}
}
