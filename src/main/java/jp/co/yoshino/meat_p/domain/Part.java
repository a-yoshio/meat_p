package jp.co.yoshino.meat_p.domain;

import lombok.Data;

/**
 * 部位データドメイン.
 * @author atsuko.yoshino
 *
 */
@Data
public class Part {
	/**id*/
	private Integer id;
	/**部位名*/
	private String part_name;
	/**部位英名*/
	private String e_name;
	/**マッピング位置*/
	private String map_coords;
	/**マッピングstyle*/
	private String map_shape;

}
