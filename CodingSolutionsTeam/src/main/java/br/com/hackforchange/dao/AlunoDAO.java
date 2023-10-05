package br.com.hackforchange.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import br.com.hackforchange.bean.Aluno;
import br.com.hackforchange.jdbc.DatabaseManager;

public class AlunoDAO {
	
	private Connection conexao;
	
	public void cadastrarAluno(Aluno aluno) {
		
		PreparedStatement stmt = null;
		String dataNasc = null;
		
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "INSERT INTO aluno(nome, dataNascimento, escola, contato) "
					+ "VALUES(?, ?, ?, ?) ";
			
			stmt = conexao.prepareStatement(query);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date formatarData;
			try {
				formatarData = sdf.parse(aluno.getDataNasc());
				dataNasc = sdf.format(formatarData);
			} catch (ParseException e) {
				System.err.println(e.getMessage());
				e.printStackTrace();
			}
			
			stmt.setString(1, aluno.getNome());
			stmt.setString(2, dataNasc);
			stmt.setString(3, aluno.getEscola());
			stmt.setString(4, aluno.getContato());
			
			stmt.executeUpdate();
			
			System.out.println("Aluno cadastrado");
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
		} finally {
			try {
				stmt.close();
				conexao.close();
			} catch (SQLException e) {
				System.err.println(e.getMessage());
				e.printStackTrace();
			}
		}
	}
	
	

}
