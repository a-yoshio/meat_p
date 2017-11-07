package jp.co.yoshino.meat_p.domain;

import lombok.Data;

@Data
public class Meat {
	/**Id*/
	private int id;
	/**英名*/
	private String e_name;
	/**日本名*/
	private String j_name;
	/**部位*/
	private int part_id;
	/**かたさレベル*/
	private int hard_lev;
	/**人気ポイント*/
	private int point;
	/**画像*/
	private String picture;
	/**説明文*/
	private String descrioton;
	/**畜種*/
	private int livestock;

}
