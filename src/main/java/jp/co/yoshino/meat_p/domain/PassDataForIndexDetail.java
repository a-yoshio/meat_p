package jp.co.yoshino.meat_p.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * お肉の詳細データ取得のためのBeans.
 * @author atsuko.yoshino
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PassDataForIndexDetail {
	/**畜種名*/
	private String livestockName;
	/**お肉Id*/
	private int meatId;
}
