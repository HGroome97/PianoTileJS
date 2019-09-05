package com.groome.business.service;

import java.util.List;

import com.groome.repository.domain.Scores;

public interface ScoresService {

    String addScore(Scores score);
   
    Scores getById(int id);

    List<Scores> getByMode(String mode);
    
    List<Scores> getAll();

}
