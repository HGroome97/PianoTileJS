package com.groome.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.groome.business.service.ScoresService;
import com.groome.repository.domain.Scores;
import com.groome.util.Constants;

@CrossOrigin
@RequestMapping(Constants.URL_BASE)
@RestController
public class ScoresRest {

    @Autowired
    private ScoresService scoresService;

    @PostMapping(Constants.ADD_URL)
    public String addScore(@RequestBody Scores scores) {
        return scoresService.addScore(scores);
    }
    
    @GetMapping(Constants.GET_BY_ID_URL)
    public Scores getById(@PathVariable int id) {
		return scoresService.getById(id);
    }
    
    @GetMapping(Constants.GET_BY_MODE_URL)
    public List<Scores> getByMode(@PathVariable String mode) {
		return scoresService.getByMode(mode);
    }
    
    @GetMapping(Constants.GET_ALL)
    public List<Scores> getAll() {
		return scoresService.getAll();
    }
    
}
