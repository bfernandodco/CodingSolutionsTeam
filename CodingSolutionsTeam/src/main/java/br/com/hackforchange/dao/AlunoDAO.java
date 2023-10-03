package br.com.hackforchange.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import br.com.hackforchange.bean.Aluno;
//import br.com.hackforchange.bean.Aluno;
import br.com.hackforchange.jdbc.DatabaseManager;

public class AlunoDAO {
	
	private Connection conexao;
	
	public void cadastrarAluno(Aluno aluno) throws ParseException {
		
		PreparedStatement stmt = null;
		
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "INSERT INTO Aluno(nome, dataNasc, escola, serie, endereco)"
					+ " VALUES(?, ?, ?, ?) ";
			
			stmt = conexao.prepareStatement(query);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date dataNasc = (Date) sdf.parse(aluno.getDataNasc());
			stmt.setDate(2, dataNasc);
			stmt.setString(3, aluno.getEscola());
			stmt.setString(4, aluno.getSerie());
			stmt.setString(5, aluno.getEndereco());
			
			stmt.executeUpdate();
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
		} finally {
			try {
				stmt.close();
				conexao.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
	
	public List<Aluno> listarAlunos() {
		
		List<Aluno> alunos = new ArrayList<Aluno>();
		PreparedStatement stmt = null;
		ResultSet rs = null;
		
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "SELECT * FROM aluno";
			stmt = conexao.prepareStatement(query);
			rs = stmt.executeQuery();
			
			while(rs.next()) {
				int idAluno = rs.getInt("idAluno");
				String nome = rs.getString("nome");
				Date data = rs.getDate("dataNasc");
				String escola = rs.getString("escola");
				String serie = rs.getString("serie");
				String endereco = rs.getString("endereco");
				String dataNasc = data.toString();
				Aluno aluno = new Aluno(idAluno, nome, dataNasc, escola, serie, endereco);
				
				alunos.add(aluno);
			}
		} catch (SQLException e) {
			System.err.println(e.getMessage());
			e.printStackTrace();
		} finally {
			try {
				stmt.close();
				rs.close();
				conexao.close();
			} catch (SQLException e) {
				System.err.println(e.getMessage());
				e.printStackTrace();
			}
		}
		return alunos;
	}
	
	public void atualizarAluno(Aluno aluno) throws ParseException {
		PreparedStatement stmt = null;
		
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "UPDATE Aluno SET nome = ?, dataNasc = ?, escola = ?, serie = ?, endereco = ? "
					+ "WHERE idAluno = ?";	
			stmt = conexao.prepareStatement(query);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			Date dataNasc = (Date) sdf.parse(aluno.getDataNasc());
			
			stmt.setString(1, aluno.getNome());
			stmt.setDate(2, dataNasc);
			stmt.setString(3, aluno.getEscola());
			stmt.setString(4, aluno.getSerie());
			stmt.setString(5, aluno.getEndereco());
			stmt.setInt(6, aluno.getIdAluno());
			
			stmt.executeUpdate();
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
	
	public void removerAluno(int idAluno) {
		PreparedStatement stmt = null;
		
		try {
			conexao = DatabaseManager.obterConexao();
			String query = "DELETE FROM Aluno WHERE idAluno = ?";
			stmt = conexao.prepareStatement(query);
			
			stmt.setInt(1, idAluno);
			
			stmt.executeUpdate();
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
