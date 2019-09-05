package com.groome.business.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.groome.repository.domain.Scores;
import com.groome.respository.persistence.ScoresRepository;
import com.groome.util.Constants;
import com.groome.util.NotFoundException;

@Service
public class ScoresServiceImpl implements ScoresService {

	@Autowired
	private ScoresRepository repo;

	@Override
	public String addScore(Scores scores) {
		repo.save(scores);
		return scores.toString();
	}
	
	@Override
	public Scores getById(int id) {
		Optional<Scores> User = repo.findById(id);
        return User.orElseThrow(() -> new NotFoundException(Double.toString(id)));
	}

	@Override
	public List<Scores> getByMode(String mode) {
		return repo.searchByMode(mode);   
	}
	
	@Override
	public List<Scores> getAll() {
		return repo.findAll();
	}
	
//	private boolean userExists(int id) {
//		Optional<Scores> userOptional = repo.findById(id);
//		return userOptional.isPresent();
//	}

}
