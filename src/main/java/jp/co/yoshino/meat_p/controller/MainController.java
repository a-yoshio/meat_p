package jp.co.yoshino.meat_p.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import jp.co.yoshino.meat_p.service.SearchService;

@Controller
@RequestMapping("/")
public class MainController {
	@Autowired
	private SearchService searchService;
	
	/**Top画面に遷移*/
	@RequestMapping("/")
	public String index() {
		return "top";
	}
	
	/**詳細を開く*/
	@RequestMapping("/detail")
	public String getDetail(String meatId,String livestockId, Model model) {
		model.addAttribute("meat", searchService.findByIdFromMeatTable(meatId, livestockId));
		return "detail";
	}
}