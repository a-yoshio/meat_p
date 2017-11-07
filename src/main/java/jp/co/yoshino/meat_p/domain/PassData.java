package jp.co.yoshino.meat_p.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PassData {
	/**畜種Id*/
	private int livestock;
	/**部位Id*/
	private int partId;
}
