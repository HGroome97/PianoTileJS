package com.groome.repository.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "scores")
public class Scores {
	
	@GeneratedValue
	@Id
	private int id;

    private String mode;
    
    private double score;

	public double getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public double getScore() {
		return score;
	}

	public void setScore(double score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "Scores [id=" + id + ", mode=" + mode + ", score=" + score + "]";
	}

	    
}
