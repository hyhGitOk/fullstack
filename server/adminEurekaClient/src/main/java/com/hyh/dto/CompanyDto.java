package com.hyh.dto;

public class CompanyDto {

	private Integer id;
	private String name;
	private String turn_over;
	private String profit;
	private String ceo_name;
	private String board_of_directors;
	private String sector_id;
	private String brief;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTurn_over() {
		return turn_over;
	}

	public void setTurn_over(String turn_over) {
		this.turn_over = turn_over;
	}

	public String getProfit() {
		return profit;
	}

	public void setProfit(String profit) {
		this.profit = profit;
	}

	public String getCeo_name() {
		return ceo_name;
	}

	public void setCeo_name(String ceo_name) {
		this.ceo_name = ceo_name;
	}

	public String getBoard_of_directors() {
		return board_of_directors;
	}

	public void setBoard_of_directors(String board_of_directors) {
		this.board_of_directors = board_of_directors;
	}

	public String getSector_id() {
		return sector_id;
	}

	public void setSector_id(String sector_id) {
		this.sector_id = sector_id;
	}

	public String getBrief() {
		return brief;
	}

	public void setBrief(String brief) {
		this.brief = brief;
	}

}
